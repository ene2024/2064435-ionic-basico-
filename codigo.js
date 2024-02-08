

    var campotexto ="";
    
function imprimirTexto() {
    // Obtener el valor del input
    var campotexto = document.getElementById("miInput");

    // Imprimir el valor en la consola
    // .value Imprime el valor de lo almacenado en la variable
    // document.getElementById("Nombredel ID del emento que buscamos");
    // alert (variable); para imprimir la variable con la pagina

    texto=campotexto.value;

    alert(texto);
}

function borrarTexto() {
    document.getElementById("miInput").value = "";
  }
