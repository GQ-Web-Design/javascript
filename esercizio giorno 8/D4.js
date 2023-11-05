/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/*
let l1 = parseInt(prompt("Inserisci un valore"));
let l2 = parseInt(prompt("Inserisci un valore"));

function area(l1,l2){
    let areaCalcolata = l1 * l2;
    return areaCalcolata;
}
let areaRettangolo = area(l1,l2);
console.log("L'area del rettangolo è :" + areaRettangolo); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let num1 = parseInt(prompt("Inserisci un valore"));
let num2 = parseInt(prompt("Inserisci un valore"));

function crazySum(num1,num2){
    if(num1 === num2){
        let sum1 = (num1 + num2) * 3;
        return sum1;
    }    
    let sum2 = num1 + num2;
    return sum2;
};
var sum3 = crazySum(num1,num2);
console.log("La somma è :" + sum3);*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA 

let num1 = parseInt(prompt("Inserisci un valore"));
let num2 = 19;
function crazyDiff(num1, num2){
    return Math.abs(num1 - num2);
};
let diff = crazyDiff(num1,num2);
console.log("La differenza assoluta è :" + diff);*/


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA 

let n = parseInt(prompt("Inserisci un valore"));

function boundary(n){
    if(n>20 && n>=100 || n === 400){
        return true;
    }    
    return false;
};
boundary(n);
console.log(boundary(n));*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let stringa = prompt("Inserisci un valore");

function epify (stringa){
    if (stringa.indexOf("Epicode") == 0){
        return stringa;
    }else {
        return ("Epicode") + stringa;
    }
}
console.log(epify(stringa));*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA 

let n = parseInt(prompt("Inserisci un valore"));

function check3and7(n){
    if ((n % 3) === 0){
        let mod = (n % 3) === 0;
        console.log('il numero è un multiplo di 3');
    return mod
    }else if ((n % 7 === 0)){
        let mod2 = (n % 7) === 0;
        console.log('il numero è un multiplo di 7');
        return mod2;
    };
    console.log('il numero non è un multiplo');
};
check3and7(n);*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA 

let stringa = prompt("Inserisci un valore");

function reverseString(stringa) {
    
    let arrayStringa = stringa.split("");
    let inversione = arrayStringa.reverse();
    let join = inversione.join("");
    
    return join; 
}
 
console.log(reverseString(stringa));*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let stringa = prompt("Inserisci un valore");

    function upperFirst (stringa) {

        let arrayStringa = stringa.split(' ') //trasformazione frase in array
        //console.log(arrayStringa); verifico il codice preso

        let arrayNuovaStringa = [] //dichiarazione array d'appoggio stringa vuota

        for (let i = 0; i < arrayStringa.length; i++) { // Ciclo For sulla lunghezza dell'array

            let primoCarattere = arrayStringa[i].charAt(0) //identifico l'iniziale di ogni parola contenuta nell'array a mezzo di charAt()
            
            let primoCarattereParola = primoCarattere.toUpperCase() //assegno nuova variabile per memorizzare la nuova lettera capitalizzata

            let eliminoVecchiaIniziale = arrayStringa[i].slice(1) // elimino la prima lettera di ogni parola contenuta nell'array a mezzo di slice()

            let sostituzionePrimaLettera = primoCarattereParola + eliminoVecchiaIniziale //sostituisco la vecchia lettera minuscola con la nuova maiuscola

            arrayNuovaStringa.push(sostituzionePrimaLettera) //immetto nel nuovo array il contenuto di sostituzionePrimaLettera
        }
        console.log(arrayNuovaStringa.join(' '));
    }
  
  upperFirst(stringa);*/


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let stringa = prompt("Inserisci un valore");

function cutString(stringa) {
    return stringa.slice(1, -1);
}

console.log(cutString(stringa));*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n = parseInt(prompt("Inserisci un valore"));

let arrayNumeri = []

function giveMeRandom(n) {
    for(let i=0; i<n; i++){
        arrayNumeri.push(Math.floor(Math.random() * 10))
    }
    return arrayNumeri;
}

console.log(giveMeRandom(n));