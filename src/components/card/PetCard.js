import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Tabs } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../App'

import PetInfo from './PetInfo';
import PetFeedCalc from './PetFeedCalc';
import PetVet from './PetVet';

import '../../styles/PetCard.css';

const PetCard = observer(({ card }) => {

    const { store } = useContext(Context);
    const firebase = store.firebaseService;
    let navigate = useNavigate();

    if (card) {
        function deleteCard() {
            if (window.confirm('Удалить карточку питомца?')) {
                firebase.removeCard(card.id);
                navigate('/');
            }
        }

        const isMobile = window.innerWidth < 640;

        return (
            <div className='PetCard'>
                <div className='PetCard-btns'>
                    <NavLink to="/">
                        <button className="button-custom card-btn" data-testid='general'>Главная</button>
                    </NavLink>
                    <NavLink to={`/pet-card/${card.id}/edit`}>
                        <button className="button-custom card-btn" data-testid='edit'>Редактировать</button>
                    </NavLink>
                    <button className="button-custom card-btn" onClick={deleteCard} data-testid='delete'>Удалить</button>
                </div>

                <Tabs
                    defaultActiveKey="1"
                    size={(isMobile) ? "small" : "large"}
                    type={(isMobile) ? "line" : "card"}
                    tabBarGutter={10}
                    items={[
                        { label: 'Общая информация', key: 'tab-1', children: <PetInfo card={card ? card : undefined} /> },
                        { label: 'Расчет корма', key: 'tab-2', children: <PetFeedCalc card={card} /> },
                        { label: 'Ветеринарная карта', key: 'tab-3', children: <PetVet card={{ ...card }} firebase={firebase} /> },
                    ]}
                />
            </div>
        );
    }
});

export default React.memo(PetCard);