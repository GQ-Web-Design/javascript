//Dichiarazione di Funzione
/*
    function nomeFunzione(...parametri?){
        //blocco di istruzioni
        return? val
    };
    nomeFunzione(...parametri?); //invocazione funzione

    //Funzione Espressione

    let ExprFunc = function (...parametri?){
        //blocco di istruzioni
        return? val
    };
    ExprFunc(...parametri?);

    //Arrow function
    let arrowFunc = ()




*/

function printString(){

    console.log("Hello Word!");

}

printString();

function somma(){
    let sum = 25 + 5;
    console.log(sum);
};

somma();

function somma(x, y){
    let sum = x + y;
    return sum;
};

let ret = somma(3, 5);
console.log(ret);
let sum2 = somma(ret, 5);
console.log(sum2);
let str = somma('ciao','ragazzi');
console.log(str);
let num = somma(5, 8, 6);
console.log(num);

let und = somma(6);
console.log(und);

//Array arguments nelle funzioni di JavaScript
function func(){
    let result = 0;
    console.log("Parametri di una funzione: " + arguments.length);
    for(let i=0; i<arguments.length; i++){
        //console.log(arguments[i]);
        result += arguments[i];
    };
    return result;
}
let r = func(5, 8, 8, 9);
console.log(r);

//Hoisting delle variabili/funzioni

var test;
console.log(test);
var test = "Test Var";
console.log(test);

func();
function func(){
    console.log("test func");
}
func();

if(condizione){
    function func(){
        console.log("Test Func");
    };
};

//Expression function

let func2 = function(){
    console.log("test func2");
};
func2();

//Particolarità di una funzione JavaScript

let f1 = function(){
    return 'Sono una funzione';
}

let result = f1; //assegno il corpo della funzione alla variabile result.
console.log(result);

// Arrow Function

let func1 = function(x, y){
    console.log("sono una funzione");
    return 'sono una funzione';
};

let arrFunc1 = () => {
    console.log("sono una funzione");
};
let arrFunc2 = () => console.log("sono una funzione"); //in caso di una sola istruzione
let arrFunc3 = () => "sono una funzione";
let arrFunc4 = (x, y) => "sono una funzione";

console.log(arrFunc3());


//scope di una variabile

let v1 = "Sono una variabile globale"; // Global scope
{
    let v1 = "Sono una variabile di blocco"; // Block scope
}

function fscope(){
    let v1 = "sono una variabile di function"; //Function Scope
}



//Metodi della stringa

let stringa = "sono una variabile di tipo string di epicode";

console.log(stringa.indexOf("una"));
console.log(stringa.lastIndexOfOf("una"));
console.log(stringa.search("una"));
console.log(stringa.length);
console.log(stringa.slice(5, 18));
console.log(stringa.slice(-8));
console.log(stringa.replace('a','x'));
console.log(stringa.replaceAll('a','x'));
console.log(stringa.toLowerCase());
console.log(stringa.toUpperCase());
console.log(stringa.concat(' - FINE'));
console.log(stringa.trim());
console.log(stringa.charAt(10));
console.log(stringa.split(' '));



//Metodi di Math

let numCas = Math.random() * 10;
console.log(Math.floor(numCas));
console.log(Math.ceil(numCas));
console.log(Math.round(numCas));
console.log(Math.max(19,8,4,2,15));
console.log(Math.min(19,8,4,2,15));

//Metodi di date

let now = new Date();
let bdate = new Date(2023, 10, 23);
console.log(now);
console.log(bdate);

console.log('Oggi è il giorno ' + now.getDate() + 'del mese di ' + (now.getMonth() + 1));



console.log("Fine");