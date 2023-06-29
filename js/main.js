const firstName = prompt("Inserisci il tuo nome:");
const surname = prompt("Inserisci il tuo cognome:");
const age = parseInt(prompt("Inserisci la tua età:"));
const color = prompt("Inserisci il tuo colore preferito:");
const bonus = age + 21;

document.getElementById("name").innerHTML = `${firstName}`
document.getElementById("surname").innerHTML = `${surname}`
document.getElementById("age").innerHTML = `${age}`
document.getElementById("favoriteColor").innerHTML = `${color}`

const passwd = firstName + surname + color + bonus;

document.getElementById("password").innerHTML = `${passwd}`
