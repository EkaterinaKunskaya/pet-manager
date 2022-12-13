import React from 'react';
import { Avatar } from 'antd';

import pawImg from '../../assets/image/paw.png';
import { showAge } from '../helpers/ShowAge';

import '../../styles/PetInfo.css';


const PetInfo = ({ card }) => {
  if (card) {
    return (
      <div className='PetInfo'>
        <div className="info-block">
          <div className="img-name">
            <div className="pet-name">{card.petName}</div>
            {(card.img) && <Avatar size={200} src={card.img} />}
            {(!card.img) && <Avatar size={200} src={pawImg} />}

          </div>
          <div className="info-text">
            <p><b>Вид: </b>{card.view}</p>
            <p><b>Порода: </b>{card.breed}</p>
            <p><b>Дата рождения: </b>{card.birthday}</p>
            <p><b>Количество лет: </b>{showAge(card.birthday)}</p>
            <p><b>Пол: </b>{card.sex}</p>
            <p><b>Сведения о репродукции: </b>{card.reproduction}</p>
            <p><b>Номер микрочипа: </b>{card.microchipNumber}</p>
            <p><b>Номер клейма: </b>{card.stampNumber}</p>
            {card.notes && <p><b>Заметки: </b>{card.notes}</p>}
          </div>
        </div>
      </div>
    );
  }
};
export default React.memo(PetInfo);