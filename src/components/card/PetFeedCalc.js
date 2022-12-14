import React, { useState, useRef } from 'react';
import { countFeed } from '../helpers/СountFeed';

import '../../styles/PetFeedCalc.css';

const PetFeedCalc = ({ card }) => {

    const [energy, setEnergy] = useState(0);
    const [foodSpoons, setFoodSpoons] = useState(0);
    const [dailyAmount, setDailyAmount] = useState(0);

    let caloriesRef = useRef();
    let activityRef = useRef();
    let weightRef = useRef();

    function count() {
        const result = countFeed(caloriesRef.current.value, activityRef.current.value, weightRef.current.value, card.view)
        setDailyAmount(result.result);
        setFoodSpoons(result.resultSpoons);
        setEnergy(result.resultEnergy);
    }

    function clearCalcForm() {
        setEnergy(0);
        setFoodSpoons(0);
        setDailyAmount(0);
        caloriesRef.current.value = '';
        activityRef.current.value = '';
        weightRef.current.value = '';
    }

    return (
        <div className='PetFeedCalc'>
            <div className="calc-block">
                <h1>{`Калькулятор суточной нормы сухого корма для ${(card.view === 'Кошка') ? 'кошек' : 'собак'}`}</h1>
                <p>
                    Зная калорийность сухого корма, Вы можете рассчитать,
                    сколько корма потребуется в день Вашему питомцу.
                </p>

                <div className="calc-inputs">
                    <div>
                        <label htmlFor="calories">1. Введите калорийность корма, ккал / 100 г (энергетическую ценность):   </label>
                        <input type="text" id="calories" ref={caloriesRef} required />
                    </div>
                    <div>
                        <label htmlFor="activity">2. Выберите уровень активности:   </label>
                        <select id="activity" ref={activityRef} required>
                            <option value=""></option>
                            {(card.view === 'Кошка') ?
                                <>
                                    <option value="265">Домашняя</option>
                                    <option value="418">Активная</option>
                                    <option value="585">Беременная</option>
                                    <option value="419">Кормящая</option>
                                </>
                                : <>
                                    <option value="377">Низкая</option>
                                    <option value="460">Нормальная</option>
                                    <option value="523">Повышенная</option>
                                    <option value="680">Высокая</option>
                                    <option value="730">Щенки</option>
                                </>
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="weight">{`3. Введите вес ${(card.view === 'Кошка') ? 'кошки' : 'собаки'}, кг:   `}</label>
                        <input type="text" id="weight" ref={weightRef} required />
                    </div>
                </div>

                <div className='calc-btns'>
                    <button className="calc-btn" data-testid='feed-count' onClick={count}>Рассчитать</button>
                    <button className="calc-btn" data-testid='feed-clear' onClick={clearCalcForm}>Очистить</button>
                </div>

                <div className="calc-results">
                    <div className="calc-result">
                        <span><b>{`Рекомендуемая суточная норма сухого корма, г:   ${dailyAmount}`}</b></span>
                    </div>
                    <div className="calc-result">
                        <span><b>{`Количество сухого корма в столовых ложках:   ${foodSpoons}`}</b></span>
                        <p>* Не является точным значением. Зависит от величины и веса гранул сухого корма.</p>
                    </div>
                    <div className="calc-result">
                        <span><b>{`Энергетическая ценность корма, кДж / кг:   ${energy}`}</b></span>
                    </div>
                </div>

                <div className="calc-copy">
                    <p>
                        Норма потребления рассчитана по методике FEDIAF <br />
                        ("Федерация производителей кормов для домашних животных").
                    </p>
                </div>

            </div>
        </div>
    );

};

export default React.memo(PetFeedCalc);