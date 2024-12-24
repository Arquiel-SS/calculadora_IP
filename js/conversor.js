const binToDec = (binaryIP) =>
    binaryIP
        .split(".")
        .map(octet => parseInt(octet, 2))
        .join(".");

const decToBin = (decimalIP) =>
    decimalIP
        .split(".")
        .map(octet => parseInt(octet, 10).toString(2).padStart(8, "0"))
        .join(".");

const handleConversion = (value, type) => {
    if (type === "binToDec") return binToDec(value);
    if (type === "decToBin") return decToBin(value);
    return "";
};

const conversionForm = document.getElementById("conversionForm");
const inputValue = document.getElementById("inputValue");
const conversionType = document.getElementById("conversionType");
const resultElement = document.getElementById("result");

conversionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = inputValue.value.trim();
    const type = conversionType.value;

    const result = handleConversion(value, type);
    resultElement.textContent = `${result}`;
});