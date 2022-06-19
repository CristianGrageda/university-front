import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UniLogin } from "./login/UniLogin";
import { UniRegister } from "./login/UniRegistro";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<UniLogin />} />
                <Route exact path="/register" element={<UniRegister />} />
            </Routes>
        </Router>
    );
}