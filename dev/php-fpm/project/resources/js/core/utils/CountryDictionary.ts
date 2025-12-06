import CountryTool from "./CountryTool";
import EmojiTool from "./EmojiTool";

function getCountry(abbreviation: string): [string, string] {
    const emoji = EmojiTool.findFlag(abbreviation);
    const country = CountryTool.findCountryName(abbreviation);

    return [emoji, country];
}

export default {
    getCountry
};
