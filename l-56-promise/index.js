// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My Name is Ajay Kumar");
        
//     },5000);
// })


// let promise1 = new Promise((resolve, reject) => {
//     let succes = false;
//     if (succes) {
//         resolve("Promise Fulfilled");
//     }else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) =>{
//     console.log("Then ka message is " + message);
    
// }).catch((err) => {
//     console.log("Error: " + err);
    
// })



let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000, "first");
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000, "Second");
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000, "Third");  
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value);
    
}).catch((err)=>{
    console.error("error " + err);
})