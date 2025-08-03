


// function changeText(event) {
//     console.log(event);
    
//   let fpara = document.getElementById("fpara");
// fpara.textContent = "Helloooooooo Ajay";  
// }

// let fpara = document.getElementById("fpara");

// fpara.addEventListener('click', changeText);
// // fpara.removeEventListener('click',changeText);




// let anchorElement = document.getElementById("fanchor");

// anchorElement.addEventListener('click', function (event) {
//   event.preventDefault();
//   anchorElement.textContent = "Click ho gya bhai"  
// });





let paras = document.querySelectorAll('p');

// console.log();
function alertPara(event) {
 alert("you have clicked on para: " + event.target.textContent);

}


// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }



let mydiv = document.getElementById('wrapper')
mydiv.addEventListener('click', alertPara)


