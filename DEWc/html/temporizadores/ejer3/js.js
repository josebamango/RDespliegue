addEventListener("load", inicio, false);
var h = 0;
var m = 0;
var s = 0;

function inicio() {
    document.getElementById("hms").innerHTML += "00:00:00";
    var boton1 = document.getElementById("sta");
    boton1.addEventListener("click", cronometrar, false);
    var boton2 = document.getElementById("sto");
    boton2.addEventListener("click", parar, false);
    var boton3 = document.getElementById("resu");
    boton3.addEventListener("click", cronometrar, false);
    var boton4 = document.getElementById("rese");
    boton4.addEventListener("click", reiniciar, false);
}

function cronometrar() {
    escribir();
    id = setInterval(escribir, 10);
}

function escribir() {
    var hAux, mAux, sAux;
    s++;
    if (s > 99) { m++;
        s = 0; }
    if (m > 59) { h++;
        m = 0; }
    if (h > 24) { h = 0; }
    if (s < 10) { sAux = "0" + s; } else { sAux = s; }
    if (m < 10) { mAux = "0" + m; } else { mAux = m; }
    if (h < 10) { hAux = "0" + h; } else { hAux = h; }
    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux;
}

function parar() {
    clearInterval(id);
}

function reiniciar() {
    clearInterval(id);
    document.getElementById("hms").innerHTML = "00:00:00";
    h = 0;
    m = 0;
    s = 0;
}