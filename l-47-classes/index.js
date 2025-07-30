function getAge(){
    return 85;

}

function utility(name= "Ajay", age = getAge()){
console.log(name, " ", age);

}

utility();

// Default Parameter
// function sayName(fName = "Rahul", lNAme = "Yadav"){
//     console.log(fName ,lNAme);
    
// }
// sayName();
 


// function solve(value = { 
//     age:15,wt:90, ht:190     // as default parameter insert object and you can also add array parameters
// }){
//     console.log("Hello sir", value);
    
// }

// solve();
// solve(undefined); // output will be deafult parameter
// solve(null);  //  output will be  null



// class Human {
// // properties
// age = 20;
// #wt = 65;  // private varivale
// ht = 180;

// //constructor
// constructor(newAge, newHeight,newWeight){
// this.age = newAge;
// this.ht = newHeight;
// this.#wt = newWeight
// }


// // behavior
// walking(){
//     console.log("I am walking");
    
// }

// running(){
//     console.log("I am running");
    
// }

// get fetchWeight(){
//     return this.#wt;
// }
// set modifyWeight(value){
//     this.#wt = value
// }

// }

// let obj = new Human(25,185,70);
// console.log(obj.ht);
// console.log(obj.fetchWeight);

// obj.walking();
