const name = "Ronit "
const repoCount = 12

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('RBslayer-ronit-rb')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('e'));

// const newString = gameName.substring(0,2)
// console.log(newString);

// const anotherString = gameName.slice(-8 , 4)
// console.log(anotherString);


// const newStringOne = "  ronit   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://rbslayer.com/ronit%20bhattacharya"
// console.log(url.replace('%20' , '-'));
// console.log(url.includes('ron'));

// console.log(gameName.split('-'));
// go through the documentaion of mdn and console for more depth

// -------------------------------------
// ✅ New Implementations Start Here 👇
// -------------------------------------
// 1️⃣ charCodeAt()
// console.log(gameName.charCodeAt(0));// --> Ascii value of R

// 2️⃣ codePointAt() (use emoji to show difference)
const emoji = "✅"
// console.log(emoji.codePointAt(0));
// ; //--> Unicode value

// 3️⃣ normalize()
// const str1 = "\u00E9";
// const str2 = "e\u0301";
// console.log(str1.normalize() == str2.normalize());//--> true

// 4️⃣ match() - extract numbers
   const mix = "RBslayer123ronit"
// console.log(mix.match(/\d+/));//123


// 5️⃣ matchAll() - extract all small groups
   const text ="id1 id2 id3"
// for(const result of text.matchAll(/id(\d)/g)){
//     console.log(result);
// }

// 6️⃣ search() - find first number
// console.log(mix.search(/\d/)); // index of '1'

// 7️⃣ padStart()
      const playerID = "7"
//    console.log(playerID.padStart(4 , "0")); // "0007" 

// // 8️⃣ padEnd() 
// console.log(playerID.padEnd(4 , "X")); // "7XXX"

//  9️⃣ repeat()
//   console.log("GG!".repeat(3)); // GG!GG!GG!

//  🔟 startsWith()
// console.log(gameName.startsWith("RB")); // true

//  1️⃣1️⃣ endsWith()
// console.log(gameName.endsWith("rb")); // true

//  1️⃣2️⃣ localeCompare() for sorting
// console.log("a".localeCompare("b")); // -1 (a < b)

//  1️⃣3️⃣ valueOf()
// console.log(gameName.valueOf());

//  1️⃣4️⃣ toString()
// console.log((1234).toString());

//  Bonus Static Methods
// console.log(String.fromCharCode(82)); // 'R'
// console.log(String.raw`RB\nSlayer`); // Keeps \n as is