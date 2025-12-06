// DTOs that match the API response structure (snake_case from backend)
type UserDTO = {
    username: string;
    email: string;
    balance?: {
        amount: number;
    };
};

export type { UserDTO };
