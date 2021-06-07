// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

var parDis = prompt('Pari o Dispari?')
var numUtente = parseInt(prompt('Scegliere un numero da 1 a 5'))

console.log(parDis);
console.log(numUtente);

var numPc = myRandom(1 , 5)
console.log(numPc);

function myRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
 var risultato = numUtente + numPc
 console.log(risultato);

function vincitore (risultato) {
    if (parDis = (riultato % 0))
    
}