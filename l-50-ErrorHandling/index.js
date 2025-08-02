// compile time Error
// console.log("B";    // syntax Error


// Runtime Error
// console.log(x);    // Reference Error


// let x = 2;
//  x.toUpperCase();  // typeError 
//  console.log(x);
 

try {
    console.log("try block is start here");
    let x = 10;
   ///
    console.log(x);   // error=> Reference Error

    console.log("try block is end here");
    
    
} catch (error) {
    console.log("I am catch block");
    console.log(error);
    
    
}finally{
    console.log("I am finally block run everytime");
    
}



// lets creat custom error

// try{
//     console.log(x);
// }
// catch(err){
// throw new Error("pahle x ko declare to ker , phir print krna");

// }