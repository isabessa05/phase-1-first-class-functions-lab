// Code your solution in this file!
function returnFirstTwoDrivers(array){
    let newArray = [];
    newArray.push (array[0]);
    newArray.push (array[1]);
    return newArray
}

function returnLastTwoDrivers (array){
    let newArray2 = [];
    newArray2.push(array[array.length - 2]);
    newArray2.push(array[array.length - 1]);
    
    return newArray2
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare){

    return  function fareMultiplier(multiplier){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn){
    return driversToReturn (drivers)
}



