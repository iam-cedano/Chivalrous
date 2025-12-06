import { LoginResult } from '../entities/Auth.entity';

interface AuthRepository {
    login(username: string, password: string): Promise<LoginResult>;
    getCSRFToken(): Promise<void>;
}

export type { AuthRepository };
