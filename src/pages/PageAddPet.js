
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../App';

import PetAddForm from '../components/PetAddForm';


export const PageAddPet = observer(() => {
  const { store } = useContext(Context);
  const firebase = store.firebaseService;

  return (
    <PetAddForm firebase={firebase} />
  );

});