import axios, { AxiosResponse } from "axios";
import ServiceResponse from "./res/ServiceResponse";

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
    })
}

export { getAllServicesAsPage, getServicesAsPageByQuery };