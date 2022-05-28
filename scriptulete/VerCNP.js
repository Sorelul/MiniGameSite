let cheie = "279146358279";
let cnp = "5001105360013";
var cnpPeLarg = cnp.split("");
var vectoras = cheie.split("");
let validare;
if (cnp.length != 13) {
    console.log("Nu respecta dimensiunea standard!");
    validare = false;
}
else
    validare = true;
let tipologie;
if (cnpPeLarg[0] > 0 && cnpPeLarg[0] < 7)
    tipologie = "cetatean roman";
else
    if (cnpPeLarg[0] == 9)
        tipologie = "cetatean strain";
    else
        tipologie = "CIFRA INCORECTA";

if (tipologie == "CIFRA INCORECTA")
    validare = false;

let d = new Date();
var an = d.getFullYear() % 100;

let t = 0; // conditie de continuare.
if (cnp.substr(1, 2) <= an)
    t = 1;
else
    validare = false;

if (cnp.substr(3, 2) == "01") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "02") {
    if (cnp.substr(5, 2) <= "28")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "03") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "04") {
    if (cnp.substr(5, 2) <= "30")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "05") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "06") {
    if (cnp.substr(5, 2) <= "30")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "07") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "08") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "09") {
    if (cnp.substr(5, 2) <= "30")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "10") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "11") {
    if (cnp.substr(5, 2) <= "30")
        t = 1;
    else
        validare = false;
}

if (cnp.substr(3, 2) == "12") {
    if (cnp.substr(5, 2) <= "31")
        t = 1;
    else
        validare = false;
}

let suma = 0;
for (let i = 0; i < vectoras.length; i++) {
    suma += vectoras[i] * cnpPeLarg[i];
}
suma %= 11;
let cifraDeControl;
let vezi = false;
if (suma < 10) {
    cifraDeControl = suma;
}
else
    if (suma == 10)
        cifraDeControl = 1;
if (cifraDeControl == cnpPeLarg[12])
    vezi = true;
if (vezi == true && validare == true)
    console.log("CNP-ul Dumneavoastra este Valid!");
else
    console.log("CNP-ul este INVALID!");

