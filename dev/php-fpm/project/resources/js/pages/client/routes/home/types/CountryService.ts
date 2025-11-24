import SourceService from "./SourceService";

type CountryService = {
     [country_abbreviation: string]: SourceService[]
};

export default CountryService;