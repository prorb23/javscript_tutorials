let score = "Ronit"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);//NaN

//"33" => 33
//"33abc" => NaN
// true = 1 ; false = 0
// null = 0
// undefined = nan
// string = nan

let isLoggedIn = "rb"
let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
//"rb" => true ; "" => false

let randNo = 33
let stringNum = String(randNo)
// console.log(stringNum);
// console.log(typeof stringNum);

// ************************* Operations *************************
let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Ronit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//use parenthisis for proper code readability
// console.log(+true);
// console.log(+"");

let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);

let x = 3;
const y = x++;//post fix

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;//prefix

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//documentation link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
