console.log("Welcome to Practice 9");
// Funtions ***********
// function for Addition
function add(num1, num2) {
  let sum = num1 + num2
  console.log("sum", sum);
  return sum
}
add(5, 6)
add(54, 89)
let addResult = add(5, 6) // we are storing the output of add fuction to the add result variable.
console.log("addResult", addResult)
// function for subtraction
function sub(sub1, sub2) {
  let subtraction = sub1 - sub2
  // console.log("sub",subtraction)
  return subtraction
}
let subResult = sub(90, 54)
console.log("subresult", subResult)
console.log("subresult", sub(56, 56))

// function for multiplication
function multiplication(mul1, mul2) {
  let mul = mul1 * mul2
  console.log("mul", mul)
  return mul
}
multiplication(56, 35)
multiplication(76, 95)
// We can also store the output of the function to the variable, 
let mulResult = multiplication(56, 35) //we are storing the output of multiplication function to the mulResult variable.
console.log("mulresult", mulResult)
// function for division
function division(div1, div2) {
  let div = div1 / div2
  console.log("div", div)
  return div
}
division(795, 845)
division(549, 220)
// home work till here
// # returning the value from the function
// example 1
function plusThree(num) {
  return num + 3;
}
// what ever we return from the function it become the output of the function.s
const answer = plusThree(27); // we are storing the output of plusThree function to the answer variable.
console.log("", answer)
//   example 2
function timesFive(num1) {
  return num1 * 5;
}
//   let answer2 = timesFive(3672)
console.log("timesfive", timesFive(43))
// Practice 
function addSeven(numb) {
 return numb + 7
}
let ressult= addSeven(3)
let xyz = 5