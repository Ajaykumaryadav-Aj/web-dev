let a = 10;
let b = 2;

// Arithmetic  Operator********************
// console.log( a+b); // 12
// console.log(a-b); // 8
// console.log(a*b); // 20
// console.log(a/b); // 5
// console.log(a%b); // 0
// console.log(a**b); // 100
// console.log(a++); // 10

// Assignment  Operator******************

// a = a + 10
// a += 10;

// a = a-5;
// a -= 4;

// a = a*5;
// a *= 5;
// console.log(a < b); // Output: false
// console.log(a> b); // Output: true

// Coparison Operator

// console.log("5" == 5); // This is loose equality , Output will be true
// console.log("5" === 5); // This is strictly equality . Output will be false
// console.log(5 === 5);  // output : true
// console.log(null== undefined); // output : true
// console.log(0 == false); // output : true
// console.log([] == false); // output : true


// Ternary Operator
 
// let age = 17;
// let ab = (age> 18)? "I can vote":"I cannot vote"
// console.log(ab);


// // Logical Operator

// console.log(true && true && true);  // Output : true
// // console.log(true && true && false); // Output : false

// console.log(false || false || false);   // output: false
// console.log(true || false || false);    // output : true

// let ans = !(true);
// console.log(ans); // False - Like just opposite , if insert false then output is true


// /// Short shorcutting 
// console.log(false || 7 || 4 ||6);   // output : 7


// Bitwise Operator

// console.log(5 | 2); // output: 7 
// console.log( 5 & 2); // output: 0
// console.log(5^6);   // Output :3
// console.log(~5);

// console.log(5 << 2); // shift left : 101 becomes 10100 , Output: 20
// console.log(5 >> 2); // Right shift : 101 becomes 001 , Output : 1
// console.log(10 >> 2);

// Conditions Statements

let c = 3;
// if (c == 1) {
//     console.log("A")
// }else if(c == 2){
//     console.log("B")
// }else if(c == 3){
//    console.log("C");
    
// }else{
//     console.log("Kuchh bhi");
    
// }


/// Switch Statement

switch (c) {
    case 1:console.log("A");
    break;
    case 2: console.log("B")
       break;
       case 3 : console.log("D");
       break;
        
        

    default: console.log("Welcome");
    
        break;
}