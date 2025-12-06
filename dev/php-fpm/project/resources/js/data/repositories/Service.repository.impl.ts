import { Service, ServiceDialog } from '@/domain/entities/Service.entity';
import { ServiceRepository } from '@/domain/repositories/Service.repository';
import * as ServiceDatasource from '../datasources/Service.datasource';
import { ServiceDTO, ServiceDialogDTO } from '../dto/Service.dto';

function mapServiceDTOToEntity(dto: ServiceDTO): Service {
    return {
        id: dto.id,
        name: dto.name,
        shortDescription: dto.short_description,
        minimumQuantity: dto.minimum_quantity,
        maximumQuantity: dto.maximum_quantity
    };
}

function mapServiceDialogDTOToEntity(dto: ServiceDialogDTO): ServiceDialog {
    return {
        id: dto.id,
        name: dto.name,
        longDescription: dto.long_description,
        minimumQuantity: dto.minimum_quantity,
        maximumQuantity: dto.maximum_quantity,
        sources: dto.sources,
        details: dto.details.map(detail => ({
            id: detail.id,
            content: detail.content,
            serviceId: detail.service_id
        }))
    };
}

class ServiceRepositoryImpl implements ServiceRepository {
    async getAllServicesAsPage(page: number): Promise<Service[]> {
        const response = await ServiceDatasource.getAllServicesAsPage(page);
        return response.data.map(mapServiceDTOToEntity);
    }

    async getServicesAsPageByQuery(page: number, query: string): Promise<Service[]> {
        const response = await ServiceDatasource.getServicesAsPageByQuery(page, query);
        return response.data.map(mapServiceDTOToEntity);
    }

    async getServiceForDialog(serviceId: number): Promise<ServiceDialog> {
        const response = await ServiceDatasource.getServiceForDialog(serviceId);
        return mapServiceDialogDTOToEntity(response.data);
    }
}

export const serviceRepository: ServiceRepository = new ServiceRepositoryImpl();
