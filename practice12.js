console.log("Welcome to practice 12")
// changing mintues into seconds
function MinIntoSeconds(min) {
  return min * 60;

}
// MinIntoSeconds(24)
console.log("Min into seconds", MinIntoSeconds(34))
// changing age into years
function ageIntoDays(age) {
  return 365 * age;
}
// ageIntoDays(54)
console.log("Age into days", ageIntoDays(56))
// increament by 2
function increament(num) {
  return num + 2
}
console.log("increament by 2", increament(34))
// Create a function that takes length and width and finds the perimeter of a rectangle.
function perimeter(length, width) {
  return 2 * (length + width)
}
console.log("perimeter", perimeter(4, 2))
// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
  return arr[0]
}
console.log("getFisrtvalue", getFirstValue([45,85 ,78,72 ]))
// 1. Create a function which takes array as input n returns 2nd values as output
function returnSecondValueInOutput(arr3) {
 return arr3[4]
}
console.log("",returnSecondValueInOutput([39,29,10,92,02,48,89]))
// 1. Create a function which takes array as input n returns last values as output
function returnLastValueInOutput(arr) {
  return arr[arr.length-1]
}
console.log("returnLastValueInOutput",returnLastValueInOutput([150,250,350,450,550,650,750,850,950,1150,1250,1350,1450,1550,]))