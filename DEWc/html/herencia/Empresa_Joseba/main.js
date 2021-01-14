function laVaina() {
    var mivaina = window.open("", "miVaina", "width=200px,height=100px,scrollbars=yes");
    mivaina.document.write("<p>Esto es la vaina</p>");
    mivaina.opener.document.write("<p>Este es el machete</p>")
}
laVaina();