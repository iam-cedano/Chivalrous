const countries = { 
  MEX: "Mexico",
  USA: "USA",
  IND: "India",
  CAN: "Canada"
};

function findCountryName(abbreviation: keyof typeof countries | string): string {
  if (!abbreviation) {
    return "Global";
  }

  const key = String(abbreviation).toUpperCase();

  if (!Object.prototype.hasOwnProperty.call(countries, key)) {
    return "Global";
  }

  return countries[key as keyof typeof countries];
}

export default {
    findCountryName
}; 