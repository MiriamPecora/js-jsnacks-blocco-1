let numArray = [];
let addition = 0;

for(let i = 0; i < 10; i++) {
    numArray.push(prompt("Inserisci un numero"));
}

for(let i = 0; i < numArray.length; i++){
    addition += parseInt(numArray[i]);
}

console.log("La somma dei numeri che hai inserito è:" + addition)