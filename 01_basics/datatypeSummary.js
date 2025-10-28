// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100  // -> number
const scoreValue = 100.3 // -> number
const isLoggedIn = false; // -> boolean
const outsideTemp = null; // -> Object
let userEmail; // -> Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId); -> false because thats the use of symbol to make it unique

const bigNumber = 95739857987n


// Reference(non-Primitive): ->

//Array , Objects , Functions

const heros = ["bhadwa" , "lawda" , "dogla"] // -> object

let myObj ={
    name :"ronit",
    age : 21
} // -> object

const myFunction = function(){
    console.log("Hello world"); 
} // -> function object

console.log(typeof myFunction);
