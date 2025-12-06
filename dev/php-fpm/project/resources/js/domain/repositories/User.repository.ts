import { User } from '../entities/User.entity';

interface UserRepository {
    getCurrentUser(): Promise<User>;
}

export type { UserRepository };
