let numArray = [];

for(let i = 0; i < 6; i++) {

    let num = prompt("Inserisci un numero");

    if(num % 2 !== 0){

        numArray.push(num);

    }
}

console.log("I numeri dispari che hai inserito sono: " + numArray);