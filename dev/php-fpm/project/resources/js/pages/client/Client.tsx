import { StrictMode, useEffect, useState } from "react";
import { Footer } from "./routes/shared/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import { History } from "./routes/history/History";
import { Home } from "./routes/home/Home";
import { getCurrentUser } from "./routes/home/api/User";
import ClientContext from "./routes/home/contexts/ClientContext";
import UserServiceResponse from "./routes/home/api/res/UserServiceResponse";
import ReactDOM from "react-dom/client";

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
                        <Route path="/home" element={<Home />} />
                        <Route path="/history" element={<History />} />
                    </Routes>

                  <Footer />

                </BrowserRouter>
            </ClientContext.Provider>
        </StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("app")!)
    .render(<Main />);
