const flags = {
  MEX: "🇲🇽",
  USA: "🇺🇸",
  IND: "🇮🇳",
  CAN: "🇨🇦"
};

const findFlag = (abbreviation: keyof typeof flags | string): string => {
  if (!abbreviation) {
    return "🌎";
  }

  const key = String(abbreviation).toUpperCase();

  if (!Object.prototype.hasOwnProperty.call(flags, key)) {
    return "🌎";
  }

  return flags[key as keyof typeof flags];
};

const removeEmojis = (text: string): string => {
  return text.replace(/\p{Emoji}+/gu, '').trim().toLocaleLowerCase();
};

function extractEmojis(text: string) {
    return text.match(/\p{Emoji}+/gu) ?? '💻';
}


const data = {
  findFlag,
  removeEmojis,
  extractEmojis
}

export default data;