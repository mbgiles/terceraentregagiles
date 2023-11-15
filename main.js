document.addEventListener("DOMContentLoaded", function () {
    const conversorForm = document.getElementById("conversorForm");
    const opcionesConvertir = document.getElementById("opcionesConvertir");
    const montoInput = document.getElementById("montoInput");
    const convertirButton = document.getElementById("convertirButton");
    const historialDiv = document.getElementById("historialDiv");

// Recuperar el historial de montos desde LocalStorage
const historialResultados = JSON.parse(localStorage.getItem("historialResultados")) || [];

// Función para actualizar y guardar el historial en LocalStorage
function actualizarHistorial(resultadoTexto) {
    historialResultados.push(resultadoTexto);
    localStorage.setItem("historialResultados", JSON.stringify(historialResultados));

    // Actualizar el contenido del historial
    mostrarHistorial();
}

// Función para mostrar el historial
function mostrarHistorial() {
    const historialDiv = document.getElementById("historialDiv"); 
historialDiv.innerHTML = "";
    // Limpiar el contenido 
    historialDiv.innerHTML = "";

    // Agregar cada monto como un párrafo
    historialResultados.forEach(resultadoTexto => {
        const p = document.createElement("p");
        p.textContent =  resultadoTexto;
        historialDiv.appendChild(p);
    });
}

// Llamar a la función para mostrar el historial al cargar la página
        mostrarHistorial();

        /// Dolar Oficial a Pesos ///
    function convertirDolarOficialAPesos(monto) {
        return monto * 365; 
    }
        /// Dolar Blue a Pesos ///
    function convertirDolarBlueAPesos(monto) {
        return monto * 925; 
    }
        /// Pesos a Dólares ///
    function convertirPesosADolarOficial(monto) {
        return monto / 100; 
    }

    conversorForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const seleccion = opcionesConvertir.value;
        const monto = parseFloat(montoInput.value);

        if (!isNaN(monto)) {
            let resultadoTexto = "";

            if (seleccion === "1") {
                resultadoTexto = `${monto} Dólares Oficiales son aproximadamente ${convertirDolarOficialAPesos(monto).toFixed(2)} Pesos.`;
            } else if (seleccion === "2") {
                resultadoTexto = `${monto} Dólares Blue son aproximadamente ${convertirDolarBlueAPesos(monto).toFixed(2)} Pesos.`;
            } else if (seleccion === "3") {
                resultadoTexto = `${monto} Pesos son aproximadamente ${convertirPesosADolarOficial(monto).toFixed(2)} Dólares Oficiales.`;
            }

            /// Resultado ///

            var resultadoTextoElement = document.getElementById("resultadoTexto");
            var resultado = "resultadoTexto"; 
            resultadoTextoElement.innerHTML = "Resultado de la conversión es: " + resultadoTexto;
        }
    });


    convertirButton.addEventListener("click", function () {

        const seleccion = opcionesConvertir.value;
        const monto = parseFloat(montoInput.value);

        if (!isNaN(monto)) {
            let resultadoTexto = "";

            if (seleccion === "1") {
                resultadoTexto = `${monto} Dólares Oficiales son aproximadamente ${convertirDolarOficialAPesos(monto).toFixed(2)} Pesos.`;
            } else if (seleccion === "2") {
                resultadoTexto = `${monto} Dólares Blue son aproximadamente ${convertirDolarBlueAPesos(monto).toFixed(2)} Pesos.`;
            } else if (seleccion === "3") {
                resultadoTexto = `${monto} Pesos son aproximadamente ${convertirPesosADolarOficial(monto).toFixed(2)} Dólares Oficiales.`;
            }



            var resultadoTextoElement = document.getElementById("resultadoTexto");
            var resultado = "resultadoTexto"; 
            resultadoTextoElement.innerHTML = "Resultado de la conversión es: " + resultadoTexto;

            // Actualizar el historial de resultados
            actualizarHistorial(resultadoTexto);

        } 
        else{
                var ingresonoValidoElement = document.getElementById("ingresonoValido");
                var ingresono = "Por favor utilice números para realizar la operación";
                ingresonoValidoElement.innerHTML = ingresono;
        
    }
    });
});
////////////////////////////////////////////////////////////////


