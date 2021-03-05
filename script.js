// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
//Stocker l'heure , minute , seconde  dans des variables
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
function demarerLaMontre() {

let now = new Date().toLocaleTimeString("fr");
let realTime = now.split(":");
let  heures = parseInt(realTime[0]);
let  minutes = parseInt(realTime[1]);
let  secondes = parseInt(realTime[2]);
let time = secondes + minutes * 60 + heures * 3600;
console.log(realTime);
let degSeconde = (time * 6);//1sec=6 deg
let degMinute = ((time * 6)/60);
let degHeure = ((time *30)/3600);

degSeconde += 6;
degMinute += 0.1;
degHeure += 0.008;

AIGUILLEHR.style.transform = "rotate(" + degHeure +"deg)";
AIGUILLEMIN.style.transform = "rotate(" + degMinute +"deg)";
AIGUILLESEC.style.transform = "rotate(" + degSeconde +"deg)";

// Déplacer les aiguilles 
// Exercuter la fonction chaque second
}
setInterval(demarerLaMontre, 1000);