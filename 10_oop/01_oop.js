const user = {
    username: "Ronit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}
//console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this);

 function User(username , loginCount , signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const userOne = new User("RonitB",12,true)
const userTwo = new User("RonitC",18,false)

console.log(userOne);
console.log(userTwo);





