
var productoInput = document.getElementById("productotxt");
var costoInput = document.getElementById("preciotxt");

var listaProductos = document.getElementById("LISTADO");
var totalElement = document.getElementById("total");

var total = 0;
var producto = "";
var costo = 0;


function agregar() {
    producto = productoInput.value;
    costo = parseInt(costoInput.value);

    total += costo;

    var newElement = document.createElement('p');
    newElement.innerHTML = producto + ".......$" + costo;

    listaProductos.insertBefore(newElement, totalElement);

    totalElement.innerHTML = "Total: $" + total;


    limpiar();
}

function limpiar() {
    productoInput.value = "";
    costoInput.value = "";   
}
