import { createContext } from "react";
import { User } from "@/domain/entities";

type ClientContextProps = {
    user?: User;
};

const ClientContext = createContext<ClientContextProps>({});

export default ClientContext;
