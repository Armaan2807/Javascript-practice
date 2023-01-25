console.log("welcome to object2.js")
// Accesing all the keys of object
let bikeObject = {
    type: "Sport bike", // string  // type is the key & sport bike is the value
    name: "Hayabusa", // string
    weight: 200, // numebr
    silencers: ["turbo boost", "normal"], // array
    newBike: true, // Boolean
  };
  console.log("All keys of bike object",Object.keys(bikeObject),Object.values(bikeObject))
//   Defining method inside object
// functions defined inside object are caled methods 
// To acces method we can only use dot notation
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 5566,
    addingTentoAge: function(){
      return 10+this.age;
    },
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log("Accessing all the keys of persojn object",Object.keys(person),Object.values(person))
  console.log("Accessing adding 10 to age method",person.addingTentoAge())
  console.log("accessing method of person object",person.fullName())
  // ******Checking Whether properties exist inside object or not*********
  const myObj = {
    top: "hat",
    bottom: "pants"  
  };
  
console.log(myObj.hasOwnProperty("top"));
console.log(myObj.hasOwnProperty("middle"));
// ***Method 2***
console.log(myObj["top"]);
console.log(myObj["middle"]);
if (myObj["top"]){
  console.log("Property exist inside object")
}
if (myObj.hasOwnProperty("top")){
  console.log("Property exist inside object")
}
