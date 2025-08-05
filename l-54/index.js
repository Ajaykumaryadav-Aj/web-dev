

// code 1

// const t1 = performance.now()
//  for(let i =0; i<=50; i++){
//     let para = document.createElement('p');
//     para.textContent= "This is para " + i;
//     document.body.appendChild(para);
//  }

//  const t2 = performance.now()

//  console.log("total time by code1 : " + (t2-t1));


//  code 2
// const t3 = performance.now();
// let mydiv = document.createElement('div');


// for(let i =1; i<=50; i++){
//    let para = document.createElement('p');
//     para.textContent= "This is para " + i;
//     mydiv.appendChild(para); 
    
// }
//  document.body.appendChild(mydiv);

//  const t4 = performance.now();

//   console.log("total time by code2 : " + (t4-t3));

 

// best code 

// let fragment = document.createDocumentFragment();

// for(let i = 1; i<=50; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is paragraph : "+ i;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
console.log("Start");














// synchronous programming


function task1() {
    console.log("Task 1 started");
    // Simulate a delay (synchronous)
    for (let i = 0; i < 1e9; i++) {}  // This loop takes time
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 started");
    console.log("Task 2 completed");
}

task1();  // First, task1 will execute completely
task2();  // Then, task2 will execute after task1 finishes
