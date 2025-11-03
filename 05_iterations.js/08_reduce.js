const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc , currVal) => acc+ currVal, 0)

console.log(myTotal);

const shoopingCart = [
    {
        itemname: "Js course",
        price: 2999
    },

     {
        itemname: "Python course",
        price: 1999
    },
     {
        itemname: "Mobile course",
        price: 5999
    },
     {
        itemname: "DS course",
        price: 15999
    }
]

const total = shoopingCart.reduce((acc,item) => acc + item.price, 0)
console.log(total);
