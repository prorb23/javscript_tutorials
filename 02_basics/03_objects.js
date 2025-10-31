// Singleton -> made of constructors
//Object.create

// object literals

const mySym = Symbol("Key1")

const Jsuser = {
    name: "Ronit",
    "full name": "Ronit Bhattacharjee",
    [mySym]: "myKey1",
    age: 21,
    location: "US",
    email: "bronit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "rbslayer@go.com"
// Object.freeze(Jsuser)
Jsuser.email = "rbslayer@go1.com"
// console.log(Jsuser);

Jsuser.greeting = function () {
    console.log("Hello User");
}
Jsuser.greeting();
console.log(Jsuser.greeting);

Jsuser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}
Jsuser.greetingTwo()



