const countries: Record<string, string> = {
    MEX: "Mexico",
    USA: "USA",
    IND: "India",
    CAN: "Canada"
};

function findCountryName(abbreviation: string): string {
    if (!abbreviation) {
        return "Global";
    }

    const key = String(abbreviation).toUpperCase();

    if (!Object.prototype.hasOwnProperty.call(countries, key)) {
        return "Global";
    }

    return countries[key];
}

export default {
    findCountryName
};
