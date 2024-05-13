function calcularEdad() {
    // Obtener el valor del input de la edad del perro
    var edadPerro = parseFloat(document.getElementById("edadPerro").value);

    // Verificar si la edad ingresada es válida
    if (isNaN(edadPerro) || edadPerro <= 0) {
        alert("Por favor, ingresa una edad válida para tu perro.");
        return;
    }

    // Calcular la edad real del perro
    var edadReal = 0;
    if (edadPerro >= 1) {
        edadReal = Math.log(edadPerro) * 16 + 31;
    } else {
        alert("Tu perro debe tener al menos un año de edad para calcular su edad real.");
        return;
    }

    // Mostrar el resultado en un elemento HTML
    document.getElementById("resultado").innerHTML = "La edad real de tu perro es: " + edadReal.toFixed(2) + " años";
}
function calcularIMC() {
    // Obtener los valores del input de peso y altura del perro
    var pesoPerro = parseFloat(document.getElementById("pesoPerro").value);
    var alturaPerro = parseFloat(document.getElementById("alturaPerro").value);

    // Verificar si los valores ingresados son válidos
    if (isNaN(pesoPerro) || pesoPerro <= 0 || isNaN(alturaPerro) || alturaPerro <= 0) {
        alert("Por favor, ingresa valores válidos para el peso y la altura de tu perro.");
        return;
    }

    // Calcular el IMC del perro
    var imcPerro = pesoPerro / (alturaPerro * alturaPerro);

    // Mostrar el resultado en un elemento HTML
    document.getElementById("resultado").innerHTML = "El IMC de tu perro es: " + imcPerro.toFixed(2);
}
