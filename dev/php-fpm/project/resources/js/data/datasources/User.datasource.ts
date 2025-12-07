import axios, { AxiosResponse } from "axios";
import { UserDTO } from "../dto/User.dto";

async function getCurrentUser(): Promise<AxiosResponse<UserDTO>> {
    return axios.get<UserDTO>('/api/user');
}

interface CreateUserResponse {
    message: string;
}

async function createUser(username: string, email: string, password: string): Promise<AxiosResponse<CreateUserResponse>> {
    return axios.post<CreateUserResponse>('/api/user', {
        username,
        email,
        password
    });
}

export { getCurrentUser, createUser };
