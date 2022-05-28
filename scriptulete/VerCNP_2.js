
function validareCNP(cnp) {
    //console.log("Avem un string?");
    if (typeof (cnp) != "string") return false;
    //console.log("Da, avem un string.");
    //console.log("Are 13 caractere?");
    if (cnp.length != 13) return false;
    //console.log("Da, are 13 caractere.");
    //console.log("Toate caracterele sunt cifre?");
    for (let e of cnp.split("")) if (!esteCifra(e)) return false;
    //console.log("Da, toate caracterele sunt cifre.");
    let s = cnp.substr(0, 1);
    if (s == 0) return false;
    //console.log(s);
    let an = cnp.substr(1, 2);
    let luna = cnp.substr(3, 2);
    let zi = cnp.substr(5, 2);
    if (s == 1 || s == 2) an = "19" + an;
    if (s == 3 || s == 4) an = "18" + an;
    if (s == 5 || s == 6) an = "20" + an;
    if (an.length == 4) {
        let dn = new Date(an, luna - 1, zi);
        //console.log(dn);
        if (an != dn.getFullYear() || luna != (dn.getMonth() + 1) || zi != dn.getDate()) return false;
    }
    const cheie = "279146358279";
    let suma = 0;
    for (let i = 0; i < cheie.length; i++)suma += cheie.substr(i, 1) * cnp.substr(i, 1);
    suma %= 11;
    //console.log(suma);
    suma = suma == 10 ? 1 : suma;
    if (suma == cnp.substr(12, 1)) return true;
    return false;
}

function esteCifra(cifra) {
    if (typeof (cifra) != "string") return false;
    if (cifra.length != 1) return false;
    if ((cifra.charCodeAt(0) > 47) && (cifra.charCodeAt(0) < 58)) return true;
    return false;
}