// DTOs that match the API response structure (snake_case from backend)
type ServiceDTO = {
    id: number;
    name: string;
    short_description: string;
    minimum_quantity: number;
    maximum_quantity: number;
};

type ServiceDetailDTO = {
    id: number;
    content: string;
    service_id: number;
};

type SourceServiceDTO = {
    id?: number;
    name?: string;
    service_id?: number;
    country_abbreviation?: string;
    price_per_thousand?: number;
    status?: number;
    warranty?: number;
    warranty_text?: string;
};

type CountryServiceDTO = {
    [country_abbreviation: string]: SourceServiceDTO[];
};

type SourceServiceMapDTO = {
    [id: string]: CountryServiceDTO;
};

type ServiceDialogDTO = {
    id: number;
    name: string;
    long_description: string;
    minimum_quantity: number;
    maximum_quantity: number;
    sources: SourceServiceMapDTO;
    details: ServiceDetailDTO[];
};

export type { 
    ServiceDTO, 
    ServiceDetailDTO, 
    SourceServiceDTO, 
    CountryServiceDTO, 
    SourceServiceMapDTO, 
    ServiceDialogDTO 
};
