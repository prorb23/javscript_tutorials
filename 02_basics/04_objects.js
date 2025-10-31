const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name ="samantha"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    name:{
        fullname:{
            userfullname:{
                firstname:"Ronit",
                lastname:"Bhattacharjee"
            }
        }
    }
}
// console.log(regularUser.name.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
//  console.log(obj3);

 const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },

    {
        id: 2,
        email: "r1@gmail.com"
    },

    {
        id: 3,
        email: "r2@gmail.com"
    },
 ]

 console.log( users[0].email)
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 console.log(tinderUser.hasOwnProperty('isLogged'));
 
 
 