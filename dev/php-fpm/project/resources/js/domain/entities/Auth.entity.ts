enum AccessMethod {
    LOGIN,
    SIGN_UP,
}

type LoginResult = {
    status: number;
    message: string;
    role?: string;
};

export type { LoginResult };
export { AccessMethod };
