// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value
    if(nombre == '') {
        alert('Por favor, inserte un nombre')
    }else {
        nombres.push(nombre);
        actualizarAmigos()
        document.getElementById('amigo').value = ''
    }
}

function actualizarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '' // Se limpia la lista antes de actualizar
    for(let i = 0; i < nombres.length; i++) {
        const li = document.createElement('li');
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(nombres.length < 2){
        alert('Debe haber al menos 2 nombres para sortear')
    }else {
        let indice = Math.floor(Math.random() * nombres.length);
        let nombreGanador = nombres[indice];
        resultado = document.getElementById('resultado');
        resultado.innerHTML = nombreGanador
    }
}

