import axios, { AxiosResponse } from "axios";
import ServiceResponse from "./res/ServicesResponse";
import ServiceDialogResponse from "./res/ServiceDialogResponse";

function getAllServicesAsPage(page: number = 1): Promise<AxiosResponse<ServiceResponse[], any, {}>> {
    return axios.get<ServiceResponse[]>('/api/services/', {
        params: {
            p: page
        }
    });
}

function getServicesAsPageByQuery(page: number = 1, query: string = ''): Promise<AxiosResponse<ServiceResponse[], any, {}>> {
    return axios.get<ServiceResponse[]>('/api/services/', {
        params: {
            p: page,
            q: query
        }
    });
}

function getServiceForDialog(serviceId: number): Promise<AxiosResponse<ServiceDialogResponse, any, {}>> {
    return axios.get<ServiceDialogResponse>(`/api/service/${serviceId}`);
}

export { getAllServicesAsPage, getServicesAsPageByQuery, getServiceForDialog };