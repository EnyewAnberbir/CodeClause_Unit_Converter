function convertUnits(inputValue, inputUnit, outputUnit) {
    let outputValue;

    if (inputUnit === "cm") {
        if (outputUnit === "m") {
            outputValue = inputValue / 100;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 100000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue / 10;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 10000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 10000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 10000000000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "m") {
        if (outputUnit === "cm") {
            outputValue = inputValue * 100;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 1000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue * 10;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 1000000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 1000000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000000000000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "km") {
        if (outputUnit === "cm") {
            outputValue = inputValue * 100000;
        } else if (outputUnit === "m") {
            outputValue = inputValue * 1000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue * 10000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 1000000000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 1000000000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000000000000000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "dm") {
        // Conversion rules for decimeter (dm)
        if (outputUnit === "cm") {
            outputValue = inputValue * 10;
        } else if (outputUnit === "m") {
            outputValue = inputValue / 10;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 10000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 100000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 100000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 100000000000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 10000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 10000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "μm") {
        // Conversion rules for micrometer (μm)
        if (outputUnit === "cm") {
            outputValue = inputValue / 10000;
        } else if (outputUnit === "m") {
            outputValue = inputValue / 1000000;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 1000000000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue / 100000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 1000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "nm") {
        // Conversion rules for nanometer (nm)
        if (outputUnit === "cm") {
            outputValue = inputValue / 10000000;
        } else if (outputUnit === "m") {
            outputValue = inputValue / 1000000000;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 1000000000000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue / 100000000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue / 1000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000000000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000000000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "pm") {
        // Conversion rules for picometer (pm)
        if (outputUnit === "cm") {
            outputValue = inputValue / 10000000000;
        } else if (outputUnit === "m") {
            outputValue = inputValue / 1000000000000;
        } else if (outputUnit === "km") {
            outputValue = inputValue / 1000000000000000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue / 100000000000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue / 1000000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue / 1000;
        } else if (outputUnit === "Mm") {
            outputValue = inputValue / 1000000000000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000000000000000000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "Mm") {
        // Conversion rules for megameter (Mm)
        if (outputUnit === "cm") {
            outputValue = inputValue * 100000000;
        } else if (outputUnit === "m") {
            outputValue = inputValue * 1000000;
        } else if (outputUnit === "km") {
            outputValue = inputValue * 1000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue * 10000000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 1000000000000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 1000000000000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000000000000000000;
        } else if (outputUnit === "Gm") {
            outputValue = inputValue / 1000;
        } else {
            outputValue = inputValue;
        }
    } else if (inputUnit === "Gm") {
        // Conversion rules for gigameter (Gm)
        if (outputUnit === "cm") {
            outputValue = inputValue * 10000000000;
        } else if (outputUnit === "m") {
            outputValue = inputValue * 1000000000;
        } else if (outputUnit === "km") {
            outputValue = inputValue * 1000000;
        } else if (outputUnit === "dm") {
            outputValue = inputValue * 100000000;
        } else if (outputUnit === "μm") {
            outputValue = inputValue * 1000000000000000;
        } else if (outputUnit === "nm") {
            outputValue = inputValue * 1000000000000000000;
        } else if (outputUnit === "pm") {
            outputValue = inputValue * 1000000000000000000000;
        } else if (outputUnit === "Mm") {
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
function restart(){
    document.getElementById("inputValue").value="";
    document.getElementById("outputValue").value="";

    
}

document.getElementById("convertButton").addEventListener("click", handleConversion);

document.getElementById("restart").addEventListener("click", restart)
