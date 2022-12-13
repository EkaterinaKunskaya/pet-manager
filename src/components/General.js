import React, { useContext, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../App';

import CardsTable from './CardsTable';
import Arrow from './Arrow';


const General = observer(() => {

  const { store } = useContext(Context);
  const firebase = store.firebaseService;

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

  return (
    <div className="main">
      <div className="aside">
        <p>Сохраняй информацию <br />в персональные карточки питомцев <br />и
          полностью контролируй <br />уход и медицинское состояние <br />своих пушистиков.</p>
        <Arrow />
        <NavLink to="/add-pet">
          <button className="button-custom main-btn">Добавить любимца</button>
        </NavLink>
      </div>
      <CardsTable firebase={{ ...firebase }} cbForceUpdate={handleClick} />
    </div>
  );
});

export default React.memo(General);