import React, {useContext} from 'react';

import { PetCard } from '../components/card/PetCard';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Context } from '../App'


export const PagePetCard = observer( () => {
  let id = useParams();
  const { store } = useContext(Context);
  const firebase = store.firebaseService;
  const cards = firebase.cards;
 
  let cardsArr;
  if (cards) cardsArr = Object.values(cards);

  let card = cardsArr?.find(element => element.id === id.id);
  
  return (
    <PetCard card={card}/>
  );
    
})