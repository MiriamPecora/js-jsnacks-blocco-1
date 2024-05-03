let firstWord = prompt("Inserisci la prima parola");
let secondWord = prompt("Inserisci la seconda parola");

// if (firstWord.length < secondWord.length) {
//     console.log(firstWord + " " + secondWord);
// }
// else {
//     console.log(secondWord + " " + firstWord);
// }

// Con fix post correzione in classe:
if (firstWord.length < secondWord.length) {
    console.log(firstWord + " è una parola più corta di " + secondWord);
}

else if (firstWord.length > secondWord.length) {
    console.log(secondWord + " è una parola più corta di " + firstWord);
}

else {
    console.log("Le parole inserite hanno la stessa lunghezza");
}