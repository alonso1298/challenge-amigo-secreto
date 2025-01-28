// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


nombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo(lista) {
    let nombre = document.getElementById('amigo').value
    if(nombre == '') {
        alert('Por favor, inserte un nombre')
    }else {
        lista.push(nombre);
        document.getElementById('amigo').value = ''
    }
    return lista;
}


console.log(agregarAmigo(nombres))

function actualizarAmigos() {
    const lista = document.getElementById('listaAmigos');
}

