var productoInput = document.getElementById("productotxt");
var costoInput = document.getElementById("preciotxt");

var listaProductos = document.getElementById("listaProductos");
var totalElement = document.getElementById("total");

var total = 0;

function agregar() {
    var producto = productoInput.value;
    var costo = parseInt(costoInput.value);

    total += costo;

    var newElement = document.createElement('p');
    newElement.innerHTML = producto + ".......$" + costo;

    listaProductos.appendChild(newElement);

    totalElement.innerHTML = "Total: $" + total;

    limpiar();
}

function limpiar() {
    productoInput.value = "";
    costoInput.value = "";   
}
