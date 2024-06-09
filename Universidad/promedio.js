                // Función para calcular el promedio de notas por ponderación
function calcularPromedioPonderado() {
    const examsPercentage = parseFloat(document.getElementById('exams').value);
    const assignmentsPercentage = parseFloat(document.getElementById('assignments').value);

         // Aquí se pueden agregar más campos de entrada y ponderación según sea necesario

            // Validar que los porcentajes sumen 100
    if (examsPercentage + assignmentsPercentage !== 100) {
        alert('Los porcentajes deben sumar 100.');
        return;
    }

                     // Solicitar las notas y calcular el promedio ponderado
    const examsGrade = parseFloat(prompt('Ingrese la nota del examen:'));
    const assignmentsGrade = parseFloat(prompt('Ingrese la nota de la tarea:'));

                     // Calcular el promedio ponderado
    const promedioPonderado = (examsGrade * examsPercentage / 100) + (assignmentsGrade * assignmentsPercentage / 100);

    alert(`El promedio ponderado es: ${promedioPonderado.toFixed(2)}`);
}

                    // Función para calcular el promedio simple de notas
function calcularPromedioSimple() {
    let suma = 0;
    const notas = [];

                        // Solicitar las 7 notas del alumno
    for (let i = 1; i <= 7; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
        notas.push(nota);
        suma += nota;
    }

                        // Calcular el promedio simple
    const promedioSimple = suma / 7;

    alert(`El promedio simple es: ${promedioSimple.toFixed(2)}`);
}

                    // Manejar la presentación de formularios y eventos
function mostrarContenido() {
    const methodSelect = document.getElementById('method');
    const method = methodSelect.value;
    const contentDiv = document.getElementById('content');

    if (method === 'ponderacion') {
        contentDiv.innerHTML = `
            <h2>Ponderación de Notas</h2>
            <p>Ingrese los porcentajes de ponderación para cada tipo de nota:</p>
            <form id="ponderacion-form">
                <label for="exams">Porcentaje para exámenes:</label>
                <input type="number" id="exams" min="0" max="100" required> %
                <br>
                <label for="assignments">Porcentaje para tareas:</label>
                <input type="number" id="assignments" min="0" max="100" required> %
                <br>
                <button type="button" onclick="calcularPromedioPonderado()">Calcular</button>
            </form>
        `;
    } else if (method === 'simple') {
        contentDiv.innerHTML = `
            <h2>Promedio Simple</h2>
            <p>Ingrese las 7 notas del alumno:</p>
            <form id="simple-form">
                <!-- Campos para ingresar las 7 notas -->
                <button type="button" onclick="calcularPromedioSimple()">Calcular</button>
            </form>
        `;
    }
}

                    // Mostrar el contenido inicial
mostrarContenido();

                    // Manejar el cambio de método de cálculo
document.getElementById('method').addEventListener('change', mostrarContenido);
