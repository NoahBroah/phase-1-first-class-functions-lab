const drivers = ['Antonia','Nuru','Amari','Mo'];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (divers) => {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
/*function createFareMultiplier() {
    return function(x) {
        console.log(arguments[0]);
        return x * x;
    }
}*/

const createFareMultiplier = (number) => {
    return function(x) {
        return x * number;
    }
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func1) {
    return func1(drivers);
}