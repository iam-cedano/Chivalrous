import axios, { AxiosResponse } from "axios";
import { LoginResponseDTO } from "../dto/Auth.dto";

async function getCSRFToken(): Promise<void> {
    await axios.get('/sanctum/csrf-cookie');
}

async function login(username: string, password: string): Promise<AxiosResponse<LoginResponseDTO>> {
    return axios.post<LoginResponseDTO>('/auth/login', { username, password });
}

export { getCSRFToken, login };
