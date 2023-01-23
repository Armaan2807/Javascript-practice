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
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log("accessing method of person object",person.fullName())