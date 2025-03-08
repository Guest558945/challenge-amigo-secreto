// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
let array = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    array.push(amigo);
    document.getElementById("amigo").value = "";
    console.log(array);
    mostrarLista();

    
}
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        lista.innerHTML += `<li>${array[i]}</li>`;
    }
}
function sortearAmigo(){
    let numero = Math.floor(Math.random() * array.length);
    let amigoSorteado = array[numero];
    let contenedor = document.getElementById("resultado");
    contenedor.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}
