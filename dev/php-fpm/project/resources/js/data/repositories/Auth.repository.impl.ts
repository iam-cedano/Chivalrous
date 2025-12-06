import { LoginResult } from '@/domain/entities/Auth.entity';
import { AuthRepository } from '@/domain/repositories/Auth.repository';
import * as AuthDatasource from '../datasources/Auth.datasource';

class AuthRepositoryImpl implements AuthRepository {
    async login(username: string, password: string): Promise<LoginResult> {
        const response = await AuthDatasource.login(username, password);
        const dto = response.data;
        
        return {
            status: dto.status,
            message: dto.message,
            redirect: dto.redirect
        };
    }

    async getCSRFToken(): Promise<void> {
        await AuthDatasource.getCSRFToken();
    }
}

export const authRepository: AuthRepository = new AuthRepositoryImpl();
