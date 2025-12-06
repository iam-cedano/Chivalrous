type Service = {
    id: number;
    name: string;
    shortDescription: string;
    minimumQuantity: number;
    maximumQuantity: number;
};

type ServiceType = {
    title: string;
    service: string;
    image: string;
    description: string;
};

type SourceService = {
    id?: number;
    name?: string;
    serviceId?: number;
    countryAbbreviation?: string;
    pricePerThousand?: number;
    status?: number;
    warranty?: number;
    warrantyText?: string;
};

type CountryService = {
    [countryAbbreviation: string]: SourceService[];
};

type SourceServiceMap = {
    [id: string]: CountryService;
};

type ServiceDetail = {
    id: number;
    content: string;
    serviceId: number;
};

type ServiceDialog = {
    id: number;
    name: string;
    longDescription: string;
    minimumQuantity: number;
    maximumQuantity: number;
    sources: SourceServiceMap;
    details: ServiceDetail[];
};

export type { 
    Service, 
    ServiceType, 
    SourceService, 
    CountryService, 
    SourceServiceMap, 
    ServiceDetail, 
    ServiceDialog 
};
