// Dichiaro il prompt per chiedere all'utente le 3 cifre e la variabile per l'addizione pari a 0
let fourNum = prompt("Inserisci un numero di 4 cifre");
let addition = 0;

// Mi assicuro che i caratteri inseriti dall'utente siano numerici e che siano 4, in caso contrario lo avvertio tramite alert e refresho la pagina
if (fourNum.length !== 4 || isNaN(fourNum)) {
    alert("Il numero che hai inserito non è valido!");
    location.reload();
}

// Ciclo tra i caratteri di fourNum e li sommo tra loro
for (let i = 0; i < fourNum.length; i++) {
    addition += parseInt(fourNum[i]);
}

// Stampo i risultati in console
console.log("Questo è il numero che hai inserito: " + fourNum);
console.log("Questa è la sua somma: " + addition);