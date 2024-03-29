console.log("Welcome to first Object exercise");
// Object is a more real life data type in which we can store variety of data
//Syntax of object is let obj={}
//Example-1
const carObject = {
  type: "Fiat",
  model: 500,
  color: "white",
};
console.log("Car object", carObject);

const carArray = ["Fiat", "500", "White"];

console.log("car Array", carArray);

//Example-2
// We can define any type of data inside the object ->😀 This is the beauty of object
// This bike object has 5 properties or we can also say it has 5 keys
let bikeObject = {
  type: "Sport bike", // string  // type is the key & sport bike is the value
  name: "Hayabusa", // string
  weight: 200, // numebr
  silencers: ["turbo boost", "normal"], // array
  newBike: true, // Boolean
};
delete bikeObject.name;
export { bikeObject };
console.log("BIke object", bikeObject);

// Object consists of two things keys & values
// Things written on left side are keys & right side are values
//  let obj ={ key : value}

// The way we have accessed items inside array similarly we can access items inside of object also
// For ex: in array we access items using arr[index]

// There are two ways in which you can access
//1. Bracket notation -> similar to array
//2. Dot notation

// Bracket notation
// console.log("Accessing bike name with bracket notation:", bikeObject["name"]);

// Dot notation
console.log(
  "Accessing bikeObejct property with dot notation: ",
  bikeObject.name
);
// Homework-1
// Access all the properties of bike object using both the notations & console them
// Bracket Notation
console.log("Accessing bike name with bracket notation:",bikeObject["type"]);
console.log("Accessing bike name with bracket notation:",bikeObject["name"]);
console.log("Accessing bike name with bracket notation:",bikeObject["weight"]);
console.log("Accessing bike name with bracket notation:",bikeObject["silencers"]);
console.log("Accessing bike name with bracket notation:",bikeObject["newBike"]);

// Dot Notation 
console.log(
  "Accessing bikeObject property with Dot notation:",
  bikeObject.type
);
console.log(
  "Accessing bikeObject property with Dot notation: ",
  bikeObject.name
);
console.log(
  "Accessing bikeObject property with Dot notation: ",
  bikeObject.weight
);
console.log(
  "Accessing bikeObject property with Dot notation: ",
  bikeObject.silencers
);
console.log(
  "Accessing bikeObject property with Dot notation: ",
  bikeObject.newBike
);
// HomeWork ends over here
// Adding New Properties to the existing objects
// Lets Insurt Price property in bikeObject
// In order to insert new properties in the existing object we can use bracket notation.
bikeObject["price"]=20000000;
console.log("Update Bike Object",bikeObject)
bikeObject["horsepower"]=100000
console.log(bikeObject)
bikeObject["milage"]=20;
console.log(bikeObject)
bikeObject["maxSpeed"]=200;
console.log(bikeObject)
// Accesing object properties using variables
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};

const myDog = "Hunter";
const myBreed = dogs[myDog]; // dogs[myDog] is equal to dogs["hunter"]
const mypet="Fido"
const myxyz= dogs[mypet];
const snoopie= "Snoopie"
const snoopie1=dogs[snoopie];
console.log(snoopie)
console.log(myxyz);
console.log(myBreed);
// Deleting properties from the object  
var person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue"
};

delete person.age;  // or delete person["age"];
console.log(person)
delete person["eyeColor"]
console.log(person)
// Before deletion: person.age = 50, after deletion, person.age = undefined