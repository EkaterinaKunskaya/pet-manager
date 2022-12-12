import {countVetDate} from './CountVetDate';

let latestDate = '01.01.2022';

test('проверка корректности установки даты процедуры', () => {

  expect(countVetDate(latestDate, 'Вакцинация против бешенства')).toBe('01.01.2023');

  expect(countVetDate(latestDate, 'Комбинированная вакцинация')).toBe('01.01.2023');

  expect(countVetDate(latestDate, 'Обработка от эндопаразитов')).toBe('01.04.2022');

  expect(countVetDate(latestDate, 'Обработка от эктопаразитов')).toBe('01.04.2022');

  expect(countVetDate(latestDate, 'Ежегодный контроль здоровья')).toBe('01.01.2023');

});