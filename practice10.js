console.log("Welcome to practice 10");
// Global Scope VS Local Scope
let globalVar="I am a global vaiable." // This variable has a global scope that means this varible is accessable anywhere below the code.
function myfunction() {
    let localVar="I am a local variable" // This variable has a local scope that means it can not be access outside the function.
    console.log("localVar",localVar)
    console.log("globalVar inside the function",globalVar);
}
myfunction() 
// console.log("outside fuction localvar",localVar); // It will give error so we are comenting it.
// example 2
const someVar = "Hat";

function myFun() {
  // const someVar = "Head";
console.log("someVar inside Var",someVar)
  return someVar;
}
myFun()
console.log("someVar outside Var",someVar)