import { User } from '../entities/User.entity';

interface UserRepository {
    getCurrentUser(): Promise<User>;
    createUser(username: string, email: string, password: string): Promise<{ message: string }>;
}

export type { UserRepository };
