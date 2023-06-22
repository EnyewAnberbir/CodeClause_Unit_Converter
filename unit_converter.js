function convertUnits(inputValue, inputUnit, outputUnit) {
    let outputValue;

    if (inputUnit === "cm") {
        if (outputUnit === "m") {
            outputValue = inputValue / 100;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 100000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "m") {
        if (outputUnit === "cm") {
            outputValue = inputValue * 100;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 1000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "km") {
        if (outputUnit === "cm") {
            outputValue = inputValue * 100000;
        } else if (outputUnit === "m") {
            outputValue = inputValue * 1000;
        } else {
            outputValue = inputValue;
        }
    }

    return outputValue;
}
function handleConversion() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    if (!isNaN(inputValue)) {
        const outputValue = convertUnits(inputValue, inputUnit, outputUnit);
        document.getElementById("outputValue").value = outputValue;
    }
}
document.getElementById("convertButton").addEventListener("click", handleConversion);
