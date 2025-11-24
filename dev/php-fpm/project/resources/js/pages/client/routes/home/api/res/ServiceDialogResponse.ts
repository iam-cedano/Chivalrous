import ServiceDetailResponse from "./ServiceDetailResponse";
import SourceServiceResponse from "./SourceServiceResponse";

type ServiceDialogResponse = {
    id: number;
    name: string;
    long_description: string;
    minimum_quantity: number;
    maximum_quantity: number;
    sources: SourceServiceResponse;
    details: ServiceDetailResponse[];
};

export default ServiceDialogResponse;