import React from 'react';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import { PetFeedCalc } from './PetFeedCalc';

test('работа PetFeedCalc', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <PetFeedCalc card={{id:"ZTBaQrUWvPV0kMKsnduwL", petName:"Милка",view:"Собака"}} />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента поле ввода и "введём" туда "5"
  // const inputElem = component.root.findByProps({"id":"calories"}); 
  // const inputElem = component.root.findByProps({"id":"activity"}); 
  // const inputElem = component.root.findByProps({"id":"weight"}); 
  // любые действия, вызывающие изменение стейта тестируемого
  // компонента, надо оборачивать в хелпер act

  // const countBtn = component.root.findByProps({"data-testid":"feed-count"}); 

  // renderer.act(() => {
  //   // делаем вид, что произошло событие onChange
  //   // сработает обработчик, поменяет стейт, а от него поменяется цифра в поле
  //   // const mockChangeEvent = { target: { value: '250' } };
  //   countBtn.props.onClick();
  // });

  // и получаем изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();



  
  
  
  //   // manually trigger the callback
  //   renderer.act(() => {
  //     tree.props.onMouseEnter();
  //   });
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  
  //   // manually trigger the callback
  //   renderer.act(() => {
  //     tree.props.onMouseLeave();
  //   });
  //   // re-rendering
  //   tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  
  



  
});
