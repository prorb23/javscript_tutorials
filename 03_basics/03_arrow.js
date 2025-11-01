const user = {
    username: "Rb",
    price: 999,
    welcome: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}
// user.welcome()
// user.username = "sam"
// user.welcome()// context changed to current context using "this" key word

//  console.log(this);

//  function biskut(){
//     let username = "Rb" //Undefined
//     console.log(this.username);
//  }
//  biskut()

const chai =  () => {
    let username = "Rb" //Undefined
     console.log(this.username);
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5));

//Implicit return
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

// const addTwo = (num1 , num2) => ({user:"RB"})

console.log(addTwo(4,5));
