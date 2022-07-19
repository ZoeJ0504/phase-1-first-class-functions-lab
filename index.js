
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length - 2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (otherNumber) {
        return otherNumber * number
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers)
}
