document.addEventListener("DOMContentLoaded", function () {
    const conversorForm = document.getElementById("conversorForm");
    const opcionesConvertir = document.getElementById("opcionesConvertir");
    const montoInput = document.getElementById("montoInput");
    const convertirButton = document.getElementById("convertirButton");

    // Recuperar el historial de montos desde LocalStorage
    const historialMontos = JSON.parse(localStorage.getItem("historialMontos")) || [];

    // Función para actualizar y guardar el historial en LocalStorage
    function actualizarHistorial(monto) {
        historialMontos.push(monto);
        localStorage.setItem("historialMontos", JSON.stringify(historialMontos));
    }

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
            prompt("Resultado de la conversión:", resultadoTexto);

        } else {
            alert("Por favor, ingrese un monto válido.");
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

            prompt("Resultado de la conversión:", resultadoTexto);

            /// Actualizar el historial de montos ///
            actualizarHistorial(monto);
        } else {
            alert("Por favor, ingrese un monto válido.");
        }
    });
});
