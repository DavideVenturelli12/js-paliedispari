//debug
console.log('JS OK!')

/* PARI E DISPARI

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

- Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

- Sommiamo i due numeri

- Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

- Dichiariamo chi ha vinto.

*/

let sceltaUtente = String(prompt('pari o dispari?'))

console.log('- scelta utente: ', sceltaUtente.trim().toLowerCase());

let numeroUtente;

while (isNaN(numeroUtente) === true) {
    numeroUtente = parseInt(prompt('scegli un numero da uno a 5'));
}
console.log("Numero scelto dall'utente: ", numeroUtente);


const random = Math.floor(Math.random() * 10) + 1;

const randomResult = generaNumeroRandom(1, 5);

console.log(randomResult);

function generaNumeroRandom(min, max) {

    const range = max - min + 1;

    const generatedNumber = Math.floor(Math.random() * range) + min;

    return ('Numero CPU: ' + generatedNumber);
}


