//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());//date today
// console.log(myDate.toISOString()); // 
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-12-2020")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})
