// Dichiaro l'array vuoto e la variabile per l'addizione con valore 0
let oneToTen = [];
let addition = 0;

// Inizio un ciclo for() a cui do istruzione di partire da 1 e arrivare a 10 e, intanto, pusharsi all'interno dell'array
for (let i = 1; i <= 10; i++) {
    oneToTen.push(i);
    // Istruzioni per la somma
    addition += parseInt(oneToTen[i-1]);
}

// Dichiaro una variabile const per calcolare la media dell'array
const avg = addition / oneToTen.length;
// Stampo i risultati della somma e della media in console
console.log("Questa è la somma dell'array: " + addition);  
console.log("Questa è la media dell'array: " + avg);

