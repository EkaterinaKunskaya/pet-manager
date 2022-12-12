import calculateAge from 'calculate-age'

function showAge (birthday) {
  let today = new Date();
  let now = today.toLocaleDateString();

  const transformDate = (date) => date.split('.').reverse().join('/');

  let transformNow = transformDate(now);
  let transformBirthday = transformDate(birthday);

  const age = new calculateAge(transformBirthday, transformNow).getObject()
  return `${age.years} ${(age.years === 1)?'год':(age.years >1 && age.years <5)?'года':'лет'} 
  и ${age.months} ${(age.months === 1)?'месяц':(age.months >1 && age.months <5)?'месяца':'месяцев'}`;
}

export {showAge};