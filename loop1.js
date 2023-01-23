// The For Loop
// The for statement creates a loop with 3 optional expressions:
//
// for (expression 1; expression 2; expression 3) {
// code block to be executed
// }`
// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

for (let i = 0; i < 5; i++) {
  console.log("I", i);
}

//Lets say we want to add 1 to each number inside array
let arr = [43, 21, 54, 22, 12, 67, 89, 99, 25];
// arr[0]++; // this will 1 in 43
// arr[1]++;
// arr[2]++;
// arr[3]++;
// arr[4]++;
//this is the drawback we cannot write through this logic if the array is very big
// That is why the concept of Loops were introduced
//Now lets do the same question with the help of Loops
console.log("Original Array", arr);

for (let i = 0; i < arr.length; i++) {
  console.log((arr[i] = arr[i] + 1));
}
