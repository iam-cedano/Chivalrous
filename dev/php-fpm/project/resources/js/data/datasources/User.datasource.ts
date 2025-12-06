import axios, { AxiosResponse } from "axios";
import { UserDTO } from "../dto/User.dto";

async function getCurrentUser(): Promise<AxiosResponse<UserDTO>> {
    return axios.get<UserDTO>('/api/user');
}

export { getCurrentUser };
