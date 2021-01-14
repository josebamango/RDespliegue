addEventListener("load", inicio, false);


function inicio() {
    var nueva;
    addEventListener('click', function() {
        nueva = window.open("", "_blank", "width=200px, height=200px");
        nueva.document.write("SOCORROOOOOOO, ME CAIGOOOOOOOOO!");
        nueva.moveBy(0, 100);
    }, false);

}