import axios, { AxiosResponse } from "axios";
import LoginResponse from "./res/login.response";

async function Login(username: string, password: string): Promise<AxiosResponse<LoginResponse, any, {}>> {
    return axios.post<LoginResponse>('/auth/login', {username, password});
}

export { Login };