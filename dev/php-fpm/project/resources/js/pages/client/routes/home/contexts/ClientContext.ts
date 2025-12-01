import { createContext } from "react";
import UserServiceResponse from "../api/res/UserServiceResponse";

type ClientProps = {
    user?: UserServiceResponse
};

const ClientContext = createContext<ClientProps>({});

export default ClientContext;