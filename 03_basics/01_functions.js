//Functions
// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
    
// }

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2;
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5,4)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
     if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rb"))

function calculateCartPrice(val1 , val2 ,...num1){
    return num1
}
// console.log(calculateCartPrice(200 , 400 ,500, 2000));

const user = {
    username: "Ronit",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price as ${anyObject.price}`);
}

// handleObject(user)
handleObject(
    {
        username: "Ram",
        price: 199
    }
)

// const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200 , 400 , 100 , 600]));
