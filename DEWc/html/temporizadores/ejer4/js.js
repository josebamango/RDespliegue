addEventListener("load", inicio, false);

function inicio() {
    var iniciar = document.getElementById('iniciar');
    iniciar.addEventListener('click', function() {
        var barra = document.getElementById("barra");
        var id = setInterval(frame, 1000);

        function frame() {
            if (barra.value >= 100) {
                var nueva = window.open("", "_blank", "width=500px, height=500px, top=50%, left=50% scrollbars=yes");
                nueva.document.write('Ya me abrí porque ya se completó la carga');
                clearInterval(id);
                i = 0;
            } else {
                barra.value += 10;
            }
        }
    }, false);
}