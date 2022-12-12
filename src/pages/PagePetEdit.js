import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../App'
import {PetEdit} from '../components/PetEdit';

import { useParams } from 'react-router-dom';


export const PagePetEdit =  observer (() => {
    let id = useParams();
  
    const { store } = useContext(Context);
  const firebase = store.firebaseService;
  
 
  
  const cards = firebase.cards;
 
  let cardsArr;
  if (cards) cardsArr = Object.values(cards);

  let card = cardsArr?.find(element => element.id === id.id);

 

  return (
    <PetEdit card={{...card}} firebase={{...firebase}}/>
  );
    
});
