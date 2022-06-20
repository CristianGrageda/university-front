import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UniHome } from "./home/UniHome";
import { UniLogin } from "./login/UniLogin";
import { UniRegister } from "./login/UniRegistro";
import { UniMainTeacher } from "./teacher/UniMainTeacher";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<UniLogin />} />
                <Route exact path="/register" element={<UniRegister />} />
                <Route exact path="/home" element={<UniHome />} />
                <Route exact path="/teacher" element={<UniMainTeacher />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}