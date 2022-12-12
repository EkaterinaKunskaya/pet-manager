function countFeed(calories, activity, weight, view) {
    let result;
    let coefficient = 4.184 * calories * 10;
    let finalObj = {};

    if (activity === '419' && view === 'Кошка') {
        result = Math.round((((Math.pow(weight, 0.67)) * (activity - 1) + (250 * weight)) / coefficient) * 1000, 2); // для кормящих кошек
    } else if ((view === 'Кошка')) {
        result = Math.round(((Math.pow(weight, 0.67)) / coefficient) * 1000 * activity, 2); // для остальных кошек
    } else if ((view === 'Собака')) {
        result = Math.round(((Math.pow(weight, 0.75)) / (coefficient)) * 1000 * activity, 2); // для собак
    }

    if (result > 0) {
        let resultSpoons = Math.round(result / 20, 2);
        finalObj.result = result;
        finalObj.resultSpoons = resultSpoons;
    }

    if (coefficient > 0) {
        let resultEnergy = Math.round(coefficient, 2);
        finalObj.resultEnergy = resultEnergy;
    }

    return finalObj;
}

export {countFeed};