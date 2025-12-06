const flags: Record<string, string> = {
    MEX: "🇲🇽",
    USA: "🇺🇸",
    IND: "🇮🇳",
    CAN: "🇨🇦"
};

const findFlag = (abbreviation: string): string => {
    if (!abbreviation) {
        return "🌎";
    }

    const key = String(abbreviation).toUpperCase();

    if (!Object.prototype.hasOwnProperty.call(flags, key)) {
        return "🌎";
    }

    return flags[key];
};

const removeEmojis = (text: string): string => {
    return text.replace(/\p{Emoji}+/gu, '').trim().toLocaleLowerCase();
};

function extractEmojis(text: string) {
    return text.match(/\p{Emoji}+/gu) ?? '💻';
}

export default {
    findFlag,
    removeEmojis,
    extractEmojis
};
