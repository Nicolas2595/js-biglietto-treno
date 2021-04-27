/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Chiedere all'utente il numero di km
var numeroKm = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(numeroKm);
document.getElementById("km").innerHTML = numeroKm;

// Chiedere all'utente l'età del passeggero
var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
console.log(etaPasseggero);
document.getElementById("eta_passeggero").innerHTML = etaPasseggero;

// Calcolo prezzo base del biglietto
var molt = numeroKm * 0.21;
console.log(molt);

// Applicazione sconto
var sconto;
if (etaPasseggero < 18) {
    sconto = (numeroKm * 20 ) / 100;
    console.log(sconto);
} else {
    sconto = (numeroKm * 40) / 100;
    console.log(sconto);
}

// Arrotondamento prezzo
var prezzo = Math.round(molt);
console.log(prezzo);

// Prezzo Biglietto
document.getElementById("prezzo_biglietto").innerHTML = prezzo;
