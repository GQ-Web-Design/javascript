
let num = prompt("inserisci un numero");
console.log(typeof num12);

if (isNaN(+num)){
  console.log ("Il valore inserito è stringa: " + (num));
  console.log(typeof num12);
}
else {
  console.log ("Il valore inserito è numerico: " + (+num));
  console.log(typeof num12);
}

let num12 = prompt('Inserisci un valore!');
console.log(typeof num12);


if (isNaN (+num12)){
    console.log("Il valore è una stringa");
    console.log(typeof num12);
} else if(typeof num12 === "string" ){
    console.log(typeof num12);
    console.log("Il valore è un numero");
}