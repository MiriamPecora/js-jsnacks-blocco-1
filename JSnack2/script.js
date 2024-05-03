let firstWord = prompt("Inserisci la prima parola");
let secondWord = prompt("Inserisci la seconda parola");

if (firstWord.length < secondWord.length) {
    console.log(firstWord + " " + secondWord);
}
else {
    console.log(secondWord + " " + firstWord);
}