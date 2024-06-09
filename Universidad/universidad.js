// Metodo de horario //
function mostrarFechaHora() {
    var fechaHora = new Date();
    var fecha = fechaHora.toLocaleDateString();
    var hora = fechaHora.toLocaleTimeString();
    var fechaHoraTexto = fecha + ' ' + hora;
    document.getElementById('fecha-hora').innerText = fechaHoraTexto;
}

mostrarFechaHora();
setInterval(mostrarFechaHora, 1000);
