addEventListener("load", inicio, false);
var array = Array(
    Array("Salidas", "Roma", "París", "Londres"),
    Array("OVIEDO", 2, 1, 3),
    Array("Madrid", 3, 2, 5),
    Array("Santander", 1, 5, 5),
    Array("Bilbao", 5, 6, 2),
);

function inicio() {
    var mostrar = document.getElementById('mostrar');
    var nueva;
    var trasporte = document.getElementsByName('trasporte');
    var tabla = document.getElementById('tabla');

    mostrar.addEventListener('click', function muchas() {
        setTimeout(() => {
            nueva = window.open("", "_blank", "width=500px, height=500px, top=120px, left=430px scrollbars=yes");
            for (i = 0; i < trasporte.length; i++) {
                if (trasporte[i].checked == true) {
                    nueva.document.write(`El viaje se hará en: ${trasporte[i].value}<br>`);
                }
            };
            nueva.document.write(`
        <title>Popup</title>
        El punto de salida es: ${salida.value}<br> 
        El punto de llegada es: ${llegada.value}<br>
        <img src="${llegada.value}.jpg" style="width: 300px">`);
            nueva.document.write("<br><input type='button' name='tabla' id='tabla' value='MOSTRAR TABLA'>");
            nueva.document.write("<br><input type='button' name='cerrar' id='cerrar' value='CERRAR'>");


        }, 2000);
        var cerrar = nueva.document.getElementById('cerrar');
        cerrar.addEventListener('click', function cerrar() {
            nueva.close();
        }, false);

    }, false);

    tabla.addEventListener('click', function mostrarTabla(array) {
        nueva.document.write('<table><tr>');
        for (i = 0; i < 4; i++) {
            document.write('machete');
        };
        nueva.document.write("</tr></table>")
    }, false);

}