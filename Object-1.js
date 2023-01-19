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
const bikeObject = {
  type: "Sport bike", // string  // type is the key & sport bike is the value
  name: "Hayabusa", // string
  weight: 200, // numebr
  silencers: ["turbo boost", "normal"], // array
  newBike: true, // Boolean
};
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
console.log("Accessing bike name with bracket notation:", bikeObject["name"]);

// Dot notation
console.log(
  "Accessing bikeObejct property with dot notation: ",
  bikeObject.name
);
// Homework-1
// Access all the properties of bike object using both the notations & console them
