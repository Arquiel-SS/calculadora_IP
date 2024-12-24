const particionarIP = (IP) => {
    octets = IP.split(".");
    return octets;
};

const detectarClase = (n) => {
    const primerOcteto = n[0];

    if (primerOcteto >= 0 && primerOcteto <= 127) {
        return "Clase A";
    } else if (primerOcteto >= 128 && primerOcteto <= 191) {
        return "Clase B";
    } else if (primerOcteto >= 192 && primerOcteto <= 223) {
        return "Clase C";
    } else if (primerOcteto >= 224 && primerOcteto <= 239) {
        return "Clase D";
    } else if (primerOcteto >= 240 && primerOcteto <= 255) {
        return "Clase E";
    } else {
        return "Clase desconocida";
    }
};

const conversionForm = document.getElementById("classForm");
const inputValue = document.getElementById("ipInput");
const resultElement = document.getElementById("result");

conversionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = inputValue.value.trim();

    const octets = particionarIP(value);
    const result = detectarClase(octets);
    resultElement.textContent = `${result}`;
});