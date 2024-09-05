let score ='33sadfs'; // pass values -- null , undefined , boolean , String
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);  
console.log(typeof (valueInNumber));
console.log(valueInNumber); // value will be NaN as score vaslue is string + numbers


/* 
"33" => 33
"33abc" => NaN
true => 1 ; false => 0

*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
 // 1=> true ; 0=> flase
 // "" => false
 // "hitesh" => true

 let someNumber = 99;
 let stringNumber = String(someNumber);
 console.log(stringNumber);
 console.log(typeof stringNumber);
 console.log(typeof someNumber);
 
 
 