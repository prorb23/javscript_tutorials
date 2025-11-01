//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ronit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Rb"
    if(username == "Rb"){
        const website = " Youtube"
        // console.log(username + website);
    }
    //  console.log(website); // out of scope
}
// console.log(username); // out of scope var

// ++++++++++++++++++++++ Interesting ++++++++++++++++++++++


// console.log(addone(5))
function  addone(num){
    return num+1
}

// console.log(addTwo(5)) // cannot access addTwo before initialization
const addTwo = function (num){
    return num + 2;
}
// console.log(addTwo(5))