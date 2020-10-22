/**
 * PER VISUALIZZARE GLI ESERCIZI, DECOMMENTARE.
 * ESERCIZI EFFETTUATI SEGUENDO I VIDEO DI LEZIONE.
 */

//ESERCIZIO 1

/*Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per invertire i caratteri di una stringa.
Capire se la parola inserita è palindroma*/

//STEP 1 - Chiedere all'utente di inserire una parola
/*
var userWord = prompt('Inserisci una parola');

var newWord = revWord(userWord);

//STEP 2 E 3 - Creare una funzione per invertire i caratteri di una stringa. Capire se la parola inserita è palindroma

 if (newWord == userWord){
  console.log('Palindroma');
 }else{
  console.log('Non è palindroma');
 }

 //METODO USATO DA PAOLO A LEZIONE

function revWord (parola){
  var parolaReverse = [''];
  
  for (var i = parola.length-1; i >= 0; i--) {
   parolaReverse += parola[i];
  }
  return parolaReverse;
}*/

//ESERCIZIO 2 - L'utente sceglie pari o dispari
/*L'utente inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.*/


var sceltaUtente = prompt('Inserisci pari o dispari');
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroUtente);
var numeroPC = random(0,5)
console.log(numeroPC);
var risultato = pariDispari(numeroUtente, numeroPC);
console.log(risultato);

if (risultato == true) {
  console.log('Pari vince');
} else {
  console.log('Dispari vince');
}

function pariDispari(numeroUtente, numeroPC) {
  var somma = numeroUtente + numeroPC;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}










