import { Service, ServiceDialog } from '../entities/Service.entity';

interface ServiceRepository {
    getAllServicesAsPage(page: number): Promise<Service[]>;
    getServicesAsPageByQuery(page: number, query: string): Promise<Service[]>;
    getServiceForDialog(serviceId: number): Promise<ServiceDialog>;
}

export type { ServiceRepository };
