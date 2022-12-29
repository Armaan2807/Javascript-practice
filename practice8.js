console.log("Welcome to practice 8");
const arr1 = [1, 2, 3];
// push inserts the value at the last of the array.
arr1.push(4);
console.log("arr1", arr1)
arr1.push(10)
console.log("arr1", arr1)
let myfriend = ["Devansh", "Arnav", "shaurya"]
myfriend.push("aditya")
console.log("myfriend", myfriend);
//*****pushing value in nested area.******
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])
console.log("myArray",myArray)
// removing element by pop in the array
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
console.log("threeArr",threeArr.pop())
const myArray2 = [["John", 23], ["cat", 2]];
// myArray2.pop()
console.log("myArray2",myArray2,"😁poped off value",myArray2.pop())
// removing first element from array using shift.
let myArray3=[1,2,3,4,5,6,7]
console.log("first removed value",myArray3.shift(),"remainig array",myArray3)
// Inserting values in the starting using unshift.
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log("ourArray",ourArray)