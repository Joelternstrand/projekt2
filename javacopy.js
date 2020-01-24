//let namn = prompt ("Vad heter du?");

//let namn = localStorage.getItem('namn');

//document.querySelector("#container").innerHTML = namn;

//localStorage.setItem('namn', namn);

//localStorage.removeItem('namn');


const container = document.querySelector("#container");

let boxNr;
boxNr=localStorage.getItem('boxNr');
console.log(boxNr);

if (boxNr ==null) {
    boxNr = prompt("Hur många boxar vill du ha?");
    localStorage.setItem('boxNr',boxNr);
}

for(i=0; i < boxNr; i++) {
    container.innerHTML+=`<div>${i+1} </div>`;
}