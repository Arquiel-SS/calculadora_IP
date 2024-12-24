// Función para convertir binario a decimal
const binToDec = (binaryIP) =>
    binaryIP
        .split(".") // Dividir por octetos
        .map(octet => parseInt(octet, 2)) // Convertir cada octeto a decimal
        .join("."); // Unir los octetos con puntos

// Función para convertir decimal a binario
const decToBin = (decimalIP) =>
    decimalIP
        .split(".") // Dividir por octetos
        .map(octet => parseInt(octet, 10).toString(2).padStart(8, "0")) // Convertir a binario y rellenar con ceros
        .join("."); // Unir los octetos con puntos

// Función principal para manejar la conversión
const handleConversion = (value, type) => {
    if (type === "binToDec") return binToDec(value);
    if (type === "decToBin") return decToBin(value);
    return ""; // Caso por defecto (por si se añade un nuevo tipo en el futuro)
};

// Obtener referencias a los elementos del formulario
const conversionForm = document.getElementById("conversionForm");
const inputValue = document.getElementById("inputValue");
const conversionType = document.getElementById("conversionType");
const resultElement = document.getElementById("result");

// Agregar evento para manejar el envío del formulario
conversionForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar recarga de la página

    const value = inputValue.value.trim();
    const type = conversionType.value;

    // Realizar la conversión y mostrar el resultado
    const result = handleConversion(value, type);
    resultElement.textContent = `${result}`;
});