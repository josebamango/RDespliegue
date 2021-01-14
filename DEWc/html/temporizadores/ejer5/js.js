addEventListener("load", inicio, false);
var contador;

function vaina() {
    var timeleft = 10;
    contador = setInterval(function() {
        timeleft--;
        cuenta.innerHTML = timeleft;
        if (timeleft <= 0) {
            bomba.src = "gif.gif";
            clearInterval(contador);
        }
    }, 1000);

}

function inicio() {
    var rojo = document.getElementById("rojo");
    var azul = document.getElementById("azul");
    var verde = document.getElementById("verde");
    var correcto = (Math.floor(Math.random() * 3) + 1);
    alert(correcto);
    var iniciar = document.getElementById('iniciar');
    var bomba = document.getElementById('bomba');
    iniciar.addEventListener('click', vaina, false);


    rojo.addEventListener('click', function() {
        aux = 1;
        clearInterval(contador);
        if (correcto == aux) {
            bomba.src = "bien.gif";
        } else {
            bomba.src = "gif.gif";
        }
    }, false);
    azul.addEventListener('click', function() {
        aux = 2;
        clearInterval(contador);
        if (correcto == aux) {
            bomba.src = "bien.gif";
        } else {
            bomba.src = "gif.gif";
        }
    }, false);
    verde.addEventListener('click', function() {
        aux = 3;
        clearInterval(contador);
        if (correcto == aux) {
            bomba.src = "bien.gif";
        } else {
            bomba.src = "gif.gif";
        }
    }, false);
}