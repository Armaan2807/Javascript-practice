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

//--------------------------------------------DAY-2 Loops---------------------------------------------
// for (let i=50; i>4; i=i-5){
//     console.log(i)
// }
//i=50 , i=45
//40,
//35>4 -> 35
// 35-5 =30 , 30>4 -> 30
// 30-5=25, 25>4 -> 25
// 25-5=20, 20>4 -> 20
// 20-5=15 , 15>4 -> 15
// 15-5=10, 10>4 ->10
// 10-5=5, 5>4 -> 5
// 5-5=0, 0  is not greater than 4 -> it will not go inside the loop or we can
// loop will stop over here

// ************* TABLE OF 3 Using loops *********************
for (let i = 1; i <= 10; i++) {
  console.log(3 * i);
}
// i=1 , 1<=10 -> 3*1=3
// i=2, 2<=10 -> 3*2=6
// i=3, 3<=10 -> 3*3=9
// i=4; 4<=10 -> 3*4=12
//................
// i=10; 10<=10 ->3*10=30
// i=11; 11<=10 NO -> Loop will stop over here
