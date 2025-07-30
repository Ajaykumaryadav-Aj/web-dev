// Function Hoisting

// sayHello();  // hoisting ,Output will be hello world

// function sayHello(){
//     console.log("hello world");
    
// // }


// console.log(myName);  // var hoisting , output will be undefined
// var myName = "ajay"


// // console.log(age);   // ReferenceError 
// // let age = 20;

// console.log(lastName);  // ReferenceError
// const lastName = "Kumar"

// function greetMe(greet, fullName){
// console.log("AJay",fullName);
// greet()
// }

// function greet(){
//     console.log("Heloo duniya");
    
// }

// greetMe(greet,"Kumar")



// Function return function

// function solve(num) {
//     return function (num){
//         return num * num;
//     }
// }

// let ans = solve();
// let finalAns = ans(10)
// console.log(finalAns);



// in array create multiple function

// const arr = [
//     function(a,b){
//         return a + b;
//     },
//     function(a,b){
//         return a - b;
//     },
//     function(a,b){
//         return a * b;
//     }
// ];

// let first = arr[2];
// let ans = first(10,4);
// console.log(ans);


//

let obj = {
    age : 23,
    wt : 59,
    ht : 177,
    greet: ()=>{
        console.log("Hello World");
        
    }

}
console.log(obj.age);
obj.greet();