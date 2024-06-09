function calcularPrecio(){ // funcion calcular Precio
    var expr = document.getElementById("fruta").value;

switch (expr) {
    case "Naranjas":
        mostrarResultado("El kilogramo de naranjas cuesta $0.59.");
        break;
    case "Manzanas":
        mostrarResultado("El kilogramo de Manzanas cuesta $0.32.");
        break;
    case "Platanos":
        mostrarResultado("El kilogramo de Platanos cuesta $0.48.");
        break;
    case "Cerezas":
        mostrarResultado("El kilogramo de Cerezas cuesta $3.00.");
        break;
    case "Mangos":
    case "Papayas":
        mostrarResultado("El kilogramo de mangos y papaya cuesta $2.70.");
        break;
    default:
        mostrarResultado("Lo lamentamos, por el momento no disponemos de " + expr + ".")

    }
}
function mostrarResultado(mensaje) {
    console.log(document.getElementById('resultado').innerHTML = mensaje);
}
 