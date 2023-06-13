const returnFirstTwoDrivers = names => [names[0], names[1]];

const returnLastTwoDrivers = names => [names[names.length-2], names[names.length-1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (names, fn) => fn(names);