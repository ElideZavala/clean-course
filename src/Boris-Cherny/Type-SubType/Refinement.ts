// The possible values a CSS unit can have.
type Unit = "cm" | "px" | "%";

// Enumerate the units.
let units: Unit[] = ["cm", "px", "%"];

// Check each unit, and return null if there is no match.
function parseUnit(value: string): Unit | null {
    for (let i = 0; i < units.length; i++) {
        // si cada uno de los elementos finaliza con cm, px o %
        if (value.endsWith(units[i])) {
            return units[i];
        }
    }
    return null;
}

type Width = {
    unit: Unit;
    value: number;
};

function parseWidth(width: number | string | undefined): Width | null {
    // If width is null or undefined, return early
    if (width == null) {
        return null;
    }

    // If width is a number, default to pixels.
    if (typeof width === "number") {
        return {
            unit: "px",
            value: width,
        };
    }

    // Try to parse a unit from width
    let unit = parseUnit(width);
    if (unit) {
        return {
            unit,
            value: parseFloat(width), // parseFloat convierte un string a un numero
        };
    }

    // Si no se pudo convertir a un numero
    return null;
}
