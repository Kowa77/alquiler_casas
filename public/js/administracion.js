const url = 'http://localhost:3000/casas';
let index = 1;

let id;

async function obtenerCasas() {
    const res = await fetch(url);
    const casas = await res.json();
    let lista = document.getElementById('lista-casas');
    lista.innerHTML = '';
    for (let i = 0; i < casas.length; i++) {
        const casa = casas[i];
        const elemento = ``;
        lista.innerHTML += (elemento);
        index = casa.idx + 1; // se usa en la funcion alta(), es para agregar un nuevo casa ya sabiendo con que idx agregar
    }
    //mostrarVendidos();
}
