type UserServiceResponse = {
    username: string,
    email: string,
    balance?: {
        amount: number
    }
}

export default UserServiceResponse;