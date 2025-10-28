// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100  // -> number
const scoreValue = 100.3 // -> number
const isLoggedIn = false; // -> boolean
const outsideTemp = null; // -> Object
let userEmail; // -> Undefined

const id = Symbol('123')
const anotherId = Symbol('123') // -> symbol

// console.log(id == anotherId); -> false because thats the use of symbol to make it unique

const bigNumber = 95739857987n


// Reference(non-Primitive): ->

//Array , Objects , Functions

const heros = ["bhola" , "lada" , "dola"] // -> object

let myObj ={
    name :"ronit",
    age : 21
} // -> object

const myFunction = function(){
    console.log("Hello world"); 
} // -> function object

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Rbslayer"
let anotherName = myName
anotherName = "Randit"

// console.log(anotherName);
// console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne
userTwo.email = "it@gmail.com"

console.log(userOne.email); // it@gmail.com
console.log(userTwo.email); // it@gmail.com


 