import { StrictMode, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { History } from "./routes/history/History";
import { Home } from "./routes/home/Home";
import { getCurrentUser } from "./routes/home/api/User";
import ClientContext from "./routes/home/contexts/ClientContext";
import UserServiceResponse from "./routes/home/api/res/UserServiceResponse";
import ReactDOM from "react-dom/client";
import { Layout } from "./routes/shared/Layout";

function Main() {
    const [user, setUser] = useState<UserServiceResponse>({username: '', email: ''});
    
    useEffect(() => {
        getCurrentUser().then(({data, status}) => {
            if (status != 200) {
                location.replace('/auth/logout');
            }

            setUser(data);
        });
    }, []);

    return (
        <StrictMode>
            <ClientContext.Provider value={{user}}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/history" element={<History />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ClientContext.Provider>
        </StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("app")!)
    .render(<Main />);
