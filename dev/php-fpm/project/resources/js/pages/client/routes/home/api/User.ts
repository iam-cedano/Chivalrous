import axios, { AxiosResponse } from "axios";
import UserServiceResponse from "./res/UserServiceResponse";

async function getCurrentUser(): Promise<AxiosResponse<UserServiceResponse, any, {}>> {
   return axios.get<UserServiceResponse>('/api/user');
}

export { getCurrentUser };