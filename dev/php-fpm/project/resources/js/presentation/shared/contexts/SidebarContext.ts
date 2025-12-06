import { createContext } from "react";

interface SidebarContextType {
    openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
    openSidebar: () => {},
});

export default SidebarContext;
export type { SidebarContextType };
