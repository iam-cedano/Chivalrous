import { User } from '@/domain/entities/User.entity';
import { UserRepository } from '@/domain/repositories/User.repository';
import * as UserDatasource from '../datasources/User.datasource';

class UserRepositoryImpl implements UserRepository {
    async getCurrentUser(): Promise<User> {
        const response = await UserDatasource.getCurrentUser();
        
        if (response.status !== 200) {
            throw new Error('Failed to fetch user');
        }

        const dto = response.data;
        
        return {
            username: dto.username,
            email: dto.email,
            balance: dto.balance ? { amount: dto.balance.amount } : undefined
        };
    }

    async createUser(username: string, email: string, password: string): Promise<{ message: string }> {
        const response = await UserDatasource.createUser(username, email, password);
        return response.data;
    }
}

export const userRepository: UserRepository = new UserRepositoryImpl();
