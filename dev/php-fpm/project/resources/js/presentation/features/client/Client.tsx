import { StrictMode, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import { User } from "@/domain/entities";
import { userRepository } from "@/data/repositories";
import { Layout } from "@/presentation/shared/layouts";
import { HomePage } from "./pages/home/HomePage";
import { HistoryPage } from "./pages/history/HistoryPage";
import ClientContext from "./contexts/ClientContext";

function ClientApp() {
    const [user, setUser] = useState<User>({ username: '', email: '' });

    useEffect(() => {
        userRepository.getCurrentUser()
            .then((userData) => {
                setUser(userData);
            })
            .catch(() => {
                location.replace('/auth/logout');
            });
    }, []);

    return (
        <StrictMode>
            <ClientContext.Provider value={{ user }}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/history" element={<HistoryPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ClientContext.Provider>
        </StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("app")!)
    .render(<ClientApp />);
