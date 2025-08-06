// async function getData() {
//    setTimeout(function() {
//     console.log(" I am inside set Timeout Block");
    
//    },3000) 
// }

// let output =getData();


// async function getData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data =await response.json();
//     console.log(data);
    

// }
// getData();



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";


const options = {
     method: "POST",
  body: JSON.stringify({ username: "ajay kumar" }),
  headers: myHeaders,
};

async function getData() {
    const response = await fetch(url);
   let data = await response.json();
   console.log("get Data: ",data);
     
} 


async function postData() {
   const response = await fetch(url,options);
   let data = await response.json();
   console.log("My Data: ",data);
    
}

postData();
getData();