// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  const driver = drivers.slice(0,2);
  return driver;
}
function returnLastTwoDrivers(drivers){
  const driver = drivers.slice(-2);
  return driver;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
  return function(fare){
    return fare ** 2;
  }
}
function fareDoubler(fare){
  return fare * 2;
}
function fareTripler(fare){
  return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(arrayOfDrivers);
  
  
}