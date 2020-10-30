addEventListener('load', inicio, false);

function inicio() {
    var boton1 = document.getElementById('a');
    boton1.addEventListener('click', pintaA, false);
    var boton2 = document.getElementById("b");
    boton2.addEventListener('click', pintaB, false);
    var boton3 = document.getElementById('orden');
    boton3.addEventListener('click', ordenar, false);
    var boton4 = document.getElementById('borrar');
    boton4.addEventListener('click', borrarAnadir, false);

}

var alumnos = ["Juan López", "Luis Guerra", "María de la Hoz", "Elena Gómez Julia Caba"];
var erasmus = ["John Smith", "Lia  Warner", "Oscar Klein", "Edward Crow"];
var todosAlumnos = alumnos.concat(erasmus);
todosAlumnos.unshift("Joseba Mantecón");
var yo = todosAlumnos.shift();
var claseA = todosAlumnos.slice(0, 4).join("-");
var claseB = todosAlumnos.slice(4, 9).join("-");
var orde = todosAlumnos.sort().join('-');
var borrado = claseB.splice(2, 0, "Luis Alberto Peres", "Diana Pierce");



function pintaA() {
    var divA = document.getElementById('cajaA');
    divA.innerHTML = claseA.toString();
}

function pintaB() {
    var divB = document.getElementById('cajaB');
    divB.innerHTML = claseB.toString();
}

function ordenar() {
    var div3 = document.getElementById('ordenado');
    div3.innerHTML = orde.toString();

}

function borrarAnadir() {
    var div4 = document.getElementById('borrado');
    div4.innerHTML = borrado.toString();
}