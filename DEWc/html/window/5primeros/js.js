addEventListener("load", inicio, false);

function inicio() {
    var abrir = document.getElementById('abrir');
    var cerrar = document.getElementById('cerrar');
    var imagen = document.getElementById('imagen');
    var opcion = document.getElementById('opciones');
    var nueva;
    /*  var cerrar = document.getElementById('cerrar');
     abrir.addEventListener('click', function abrir() {
         nueva = window.open("", "miVaina", "width=200px, height=300px, scrollbars=yes");
     }, false);
     cerrar.addEventListener('click', function cerrar() {
         nueva.close();
     }, false); */
    abrir.addEventListener('click', function muchas() {
        /*  let x, y;
         x = Math.random() * (800 - 50) + 50;
         y = Math.random() * (800 - 50) + 50; */
        /*    nueva = window.open("", "_blank", "width=500px, height=500px, top=50%, left=50% scrollbars=yes");
           nueva.moveBy(400, 100);
           nueva.document.write("machete"); */
    }, false);
    mover.addEventListener('click', function mover() {
        nueva.moveBy(10, 0);
    }, false);

    imagen.addEventListener('click', function abrirImagen() {
        nueva = window.open("", "miVaina", "width=300px, height=500px, scrollbars=yes");
        nueva.document.write(`<img src="${opcion.value}.jpg">`);
    }, false);

}