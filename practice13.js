// console>log("Welcome to Practice 13");
// **********************************************************
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false
function numberLessThanZero(num) {
    if (num <= 0) {
        console.log(true,num)
        return true;
    }
    else {
        console.log(false,num)
        return false;
    }
}
console.log("numberLessThan", numberLessThanZero(4))
// **********************************************************
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false
function numberAddedToBecomeHundered(a,b) {
    if (a+b<100){
        console.log(true,a,b)
        return true;
    }
    else (a+b>100);{
        console.log(false,a,b)
        return false;
    }
}
console.log("Number added to become 100", numberAddedToBecomeHundered(43, 23))
// **********************************************************
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
	let hoursIntoMin =60*hours
    let TotalMinutes = hoursIntoMin+minutes
    let TotalSeconds = TotalMinutes*60
    console.log(TotalSeconds)
    return TotalSeconds
}
console.log("convert",convert(2,12))