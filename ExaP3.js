// Función para evaluar si una frase es un palíndromo
function palindromo(cadena) {
    // Inicialización de la variable resultado con la frase original
    var resultado = "La frase \"" + cadena + "\" \n";
    
    // Convierte la cadena a minúsculas y eliminar espacios
    var cadenaOriginal = cadena.toLowerCase();
    var cadenaSinEspacios = cadenaOriginal.replace(/ /g, "");

    // Invierte la cadena sin espacios
    var cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");

    // Compara la cadena original sin espacios con la invertida
    if (cadenaSinEspacios === cadenaInvertida) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }

    return resultado;
}

// Manejar el envío del formulario
document.getElementById("palindromeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    var phrase = document.getElementById("phrase").value; // Obtener la frase del cuadro de texto
    var result = palindromo(phrase); // Evalua si es un palíndromo
    document.getElementById("result").textContent = result; // Nos muetra el resultado en el párrafo
});