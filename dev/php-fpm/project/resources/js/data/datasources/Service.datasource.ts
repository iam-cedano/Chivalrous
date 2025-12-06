import axios, { AxiosResponse } from "axios";
import { ServiceDTO, ServiceDialogDTO } from "../dto/Service.dto";

function getAllServicesAsPage(page: number = 1): Promise<AxiosResponse<ServiceDTO[]>> {
    return axios.get<ServiceDTO[]>('/api/services/', {
        params: {
            p: page
        }
    });
}

function getServicesAsPageByQuery(page: number = 1, query: string = ''): Promise<AxiosResponse<ServiceDTO[]>> {
    return axios.get<ServiceDTO[]>('/api/services/', {
        params: {
            p: page,
            q: query
        }
    });
}

function getServiceForDialog(serviceId: number): Promise<AxiosResponse<ServiceDialogDTO>> {
    return axios.get<ServiceDialogDTO>(`/api/service/${serviceId}`);
}

export { getAllServicesAsPage, getServicesAsPageByQuery, getServiceForDialog };
