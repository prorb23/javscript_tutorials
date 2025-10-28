const accountId = 14455332 // cant be changes
let accountEmail = "rb@gmail.com"
var accountPassword = "703165"
accountCity = "Durgapur" // not recomennded
let accountState;// undefined

// accountId = 5 // not allowed

accountEmail ="rb@rb.com"
accountPassword = "345758"
accountCity = "Kolkata"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
