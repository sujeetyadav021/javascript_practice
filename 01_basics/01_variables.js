const accountId = 186;  // Once assigned the value can't be changed
let accountEmail= "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai"; // we can also declare varibles without using variable type in js but preferd not to use this 

let accountState;

//accountId = 212 ; // not allowed

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
accountEmail="abc.com";
accountPassword="22222222";
accountCity="Pune";
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
