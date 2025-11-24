import CountryService from "../../types/CountryService";
import SourceService from "../../types/SourceService";

type SourceServiceResponse = {
    [id: string]: CountryService
};

export default SourceServiceResponse;