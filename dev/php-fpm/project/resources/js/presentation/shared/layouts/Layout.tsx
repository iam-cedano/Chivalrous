import { JSX, useState } from "react";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import SidebarContext from "../contexts/SidebarContext";

function Layout(): JSX.Element {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <SidebarContext.Provider value={{ openSidebar: () => setSidebarOpen(true) }}>
            <div className="min-h-screen flex flex-col">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                {/* Main content area */}
                <div className="flex-1">
                    {/* Route content rendered here */}
                    <Outlet />
                </div>

                <Footer />
            </div>
        </SidebarContext.Provider>
    );
}

export { Layout };
