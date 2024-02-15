function login() {
    var usuario = document.getElementById("usuario").value;
    document.getElementById("mensaje").innerHTML = "Login correcto. Bienvenido, " + usuario + "!";
}

function registro() {
    var usuario = document.getElementById("usuario").value;
    document.getElementById("mensaje").innerHTML = "Registro exitoso. Bienvenido, " + usuario + "!";
}
