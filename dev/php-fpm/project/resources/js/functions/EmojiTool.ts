const flags = {
  MEX: "🇲🇽",
  USA: "🇺🇸",
  IND: "🇮🇳",
  CAN: "🇨🇦"
};

function findFlag(abbreviation: keyof typeof flags | string): string {
  if (!abbreviation) {
    return "🌎";
  }

  const key = String(abbreviation).toUpperCase();

  if (!Object.prototype.hasOwnProperty.call(flags, key)) {
    return "🌎";
  }

  return flags[key as keyof typeof flags];
}


export default {
  findFlag
};