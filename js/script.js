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

function add(num1,num2) {
    
    var risultato = (num1 + num2);
    return risultato;
}   

var somma = add(numUtente, numPc);
 console.log(somma);

function vincitore(x) {

    if(x % 2 ==0){
        return console.log('è pari');
    }
    else{
        return console.log('è dispari');
    }

}

var vinto = vincitore(somma);

if(vinto == parDis){

    console.log('utente vince');   
}
else{
    console.log('computer vince');
}

