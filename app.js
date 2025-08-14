let amigos = []; //almacenar el nombre los amigos

console.log(amigos) //muestra en la consola que los nombres están siendo registrados en el array amigos
function agregarAmigo() {
    let nombreIngresadoUsuario = document.getElementById("amigo").value.trim();
    if(nombreIngresadoUsuario === "") {
        alert("El campo está vacío, por favor ingrese un nombre.");
} else {
    if (nombreIngresadoUsuario !== "") { //si el campo de texto no está vacío se aplica en .push y se agrega el nombre al array.
        amigos.push(nombreIngresadoUsuario)
        document.getElementById("amigo").value = "";

        mostrarListaAmigos();
    }
}
}

function mostrarListaAmigos () {
    let lista = document.getElementById("listaAmigos") ;
    lista.innerHTML = "";

    for(let i = 0 ; i < amigos.length ; i++) {
        lista.innerHTML += `<li> ${amigos[i]}</li>` ;
    }
}
        
    



