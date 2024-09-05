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
 
 // **************************************** Operations ***********************************************

 let value = 3;
 let negValue = - value
 console.log(negValue);
 
 console.log(2+3);
 console.log(2-2);
 console.log(2*2);
 console.log(2**3);
 console.log(2/3);
 console.log(2%3);
 
 let str1 = "hello";
 let str2 = "World";
 let str3 = str1 + str2;
 console.log(str3);

 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1"+"2");
 console.log("1"+2+2);
 console.log("1"+ 2 + "2");
 console.log(1+2+"2");

 console.log(+true); // Read on operator precidence
 console.log(+"");

 let num1 , num2, num3 ;

 num1 = num2 = num3 = 2+2; // don't write code like this 

 let gameCounter = 100;
 gameCounter++;   // prefix and postfix
 console.log(gameCounter);
 

 
 
 
  
 
 
 
 
 
 
 
 
 
 
 