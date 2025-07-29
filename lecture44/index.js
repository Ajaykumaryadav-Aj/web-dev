// Create obj in js 
// Collection of key value pair
// let obj = {
//     name : "Ajay",
//     age: 22,
//     weight:56,
//     height:"5ft 8in",
//     greet:function(){
//         console.log("Hello Friends");
        
//     }
// }

// console.log(obj);
// obj.greet();


// creation of array
// let arr = [10,22,13,34,15,7,6];

// array constructor
 let brr = new Array('ajay', 5, true);

 brr.push("Kumar"); // insert element by push right side
 brr.pop(); // remove element right side

//  brr.shift(); /// remove from left side element
//  brr.unshift("ajay");  // insert element in left side
// arr.splice(3,2,10,12); // [1,2,10,12]
//  console.log(arr);
//  console.log(brr);
// console.log(arr.slice(1,-2)); // output will be [2,3]
//  console.log(brr[0]);
//  console.log(arr[3]);


// Map in array
// let ansArray = arr.map((x) =>{
// return x * x;
// })
// console.log(ansArray);

// arr.map((number,index)=>{
//     console.log(number);
//     console.log('index',index);
    
// });

// Filter 
// let evenArray = arr.filter((number) =>{
//     if (number % 2 == 0) {
//       return true  
//     }else{
//         return false;
//     }
// })
//  console.log(evenArray);
 

// let crr = ['Ajay',3,5,'Kumar'];

// let ansArray= crr.filter((value) => {
//     if (typeof(value) == "string") {
//        return true;
        
//     }else{
//         return false;
//     }
// })
 
// console.log(ansArray);


// Reduce 

// let arr = [1,4,5,10];

// let ans = arr.reduce((acc,curr) => {
// return acc + curr;
// },0);
// console.log(ans);



// Sort 

// print in ascending order
// let arr = [3,4,5,2,42,1];
// let ans = arr.sort((a,b)=>{
// return a -b;
// });
// console.log(ans);


// // print descending order

// let des = arr.sort((a,b)=>{
//     return b - a;
// })
// console.log(des);


// // indexof
// console.log(arr.indexOf(5));

// Find()

// let users = [{id: 1, name : "Ajay"},{id: 2, name : "Rahul"},{id: 3, name : "Vishal"}];
// let result = users.find((user)=>{
//  return   user.name === "Rahul";
// })
// console.log(result);


// let arr = [10,20,30];
// let length = arr.length;

// // console.log(length);

// arr.forEach((value, index)=>{
//     console.log("Number :", value, "index :" ,index );
    
// });

// for(let val of arr){
//     console.log(val);
    
// }

// let myName = "Ajay";
// for(let name of myName){
//     console.log(name);
    
// }


let arr = [10,20,30,40];

function getSum(arr){


let sum = 0;
arr.forEach((value)=>{
sum = sum + value;
}

)
return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);

