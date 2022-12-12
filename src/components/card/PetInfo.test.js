import React from 'react';
import renderer from 'react-test-renderer';

import { PetInfo } from './PetInfo';

test('работа PetInfo', () => {

  const component = renderer.create(
    <PetInfo card={{
        petName: 'Милка', 
        view: 'Собака', 
        breed: 'Беспородная',
        birthday: '23.11.2011',
        sex: 'Самка',
        reproduction: 'Стерилизована',
        microchipNumber: '-',
        stampNumber: '-',
        notes: 'Хорошая девочка.',
        img: ''
    }} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});




                                
              

