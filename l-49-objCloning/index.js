// let obj = {
//     age :20,
//     ht:180,
//     wt:62,
// }


// console.log(obj);

// obj.color = "Black"
// console.log(obj);



// Object Cloning 

let src = {
    age :30,
    ht:170,
     wt:72, 
}

// Cloning using iteration
let dest = {};
for(let key in src){
let newKey = key;
let newValue = src[key];
dest[newKey]=newValue
}


// Using Spread operator
// let objClone = {...src};
console.log("src:",src);
 console.log("objClone:",dest);


// using assign method for object cloning

//  let src2 = {
//     name : "Ajay",
//     value:23
//  }
// let objcln = Object.assign({},src,src2);
// console.log("src:",src);
// console.log("objCln:",objcln);

