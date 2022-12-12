function countVetDate(latestDate, procedure) {
    let date = new Date(latestDate);
    switch (procedure) {
        case 'Вакцинация против бешенства':
        case 'Комбинированная вакцинация':
            date.setMonth(date.getMonth() + 12);
            return date.toLocaleDateString();
        case 'Обработка от эндопаразитов':
            date.setMonth(date.getMonth() + 3);
            return date.toLocaleDateString();
        case 'Обработка от эктопаразитов':
            date.setMonth(date.getMonth() + 3);
            return date.toLocaleDateString();
        case 'Ежегодный контроль здоровья':
            date.setMonth(date.getMonth() + 12);
            return date.toLocaleDateString();
        default:
            return '';
    }
};

export {countVetDate};