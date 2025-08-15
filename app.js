let amigos = []; 

console.log(amigos) 
function agregarAmigo() {
    let nombreIngresadoUsuario = document.getElementById("amigo").value.trim();
    if(nombreIngresadoUsuario === "") {
        alert("El campo está vacío, por favor ingrese un nombre.");
        return;
 
}   else {
    if (nombreIngresadoUsuario !== "") { 
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

function sortearAmigo (){    
    if(amigos.length === 0){
        alert("No hay nombres de amigos registrados.");
        return;
    
    }if(amigos.length < 2){
        alert("Ingrese un nombre más, se necesitan mínimo 2 para sortear.");
        return;
    }

    let nombreSorteado = Math.floor(Math.random() * amigos.length);
    let  resultado = amigos[nombreSorteado];

    document.getElementById("resultado").textContent = `El nombre ganador es: ${resultado}`;
}
        
    



