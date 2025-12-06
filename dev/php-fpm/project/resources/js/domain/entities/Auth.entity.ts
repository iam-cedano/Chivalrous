enum AccessMethod {
    LOGIN,
    SIGN_UP,
}

type LoginResult = {
    status: number;
    message: string;
    redirect?: string;
};

export type { LoginResult };
export { AccessMethod };
