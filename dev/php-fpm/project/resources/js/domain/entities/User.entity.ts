type UserBalance = {
    amount: number;
};

type User = {
    username: string;
    email: string;
    balance?: UserBalance;
};

export type { User, UserBalance };
