import {countFeed} from './СountFeed';

let data = {
    catHome: '265',
    catActive: '418',
    catPregnant: '585',
    catLactating: '419',                             
    dogLow: '377',
    dogNormal: '460',
    dogEnhanced: '523',
    dogHigh: '680',
    dogPuppies: '730'
};

test('проверка корректности расчета корма', () => {

  expect(countFeed(250, data.catHome, 5, 'Кошка')).toEqual({result: 74, resultSpoons: 4, resultEnergy: 10460});

  expect(countFeed(250, data.catActive, 5, 'Кошка')).toEqual({result: 117, resultSpoons: 6, resultEnergy: 10460});

  expect(countFeed(250, data.catPregnant, 5, 'Кошка')).toEqual({result: 164, resultSpoons: 8, resultEnergy: 10460});

  expect(countFeed(250, data.catLactating, 5, 'Кошка')).toEqual({result: 237, resultSpoons: 12, resultEnergy: 10460});

  expect(countFeed(250, data.dogLow, 10, 'Собака')).toEqual({result: 203, resultSpoons: 10, resultEnergy: 10460});

  expect(countFeed(250, data.dogNormal, 10, 'Собака')).toEqual({result: 247, resultSpoons: 12, resultEnergy: 10460});

  expect(countFeed(250, data.dogEnhanced, 10, 'Собака')).toEqual({result: 281, resultSpoons: 14, resultEnergy: 10460});

  expect(countFeed(250, data.dogHigh, 10, 'Собака')).toEqual({result: 366, resultSpoons: 18, resultEnergy: 10460});

  expect(countFeed(250, data.dogPuppies, 5, 'Собака')).toEqual({result: 233, resultSpoons: 12, resultEnergy: 10460});

});