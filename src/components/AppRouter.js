import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UniHome } from "./home/UniHome";
import { UniLogin } from "./login/UniLogin";
import { UniRegister } from "./login/UniRegistro";
import { UniAddMatter } from "./matters/UniAddMatter";
import { UniMainMatter } from "./matters/UniMainMatter";
import { UniAddTeacher } from "./teacher/UniAddTeacher";
import { UniMainTeacher } from "./teacher/UniMainTeacher";

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<UniLogin />} />
                <Route exact path="/register" element={<UniRegister />} />
                <Route exact path="/home" element={<UniHome />} />
                <Route exact path="/teacher" element={<UniMainTeacher />} />
                <Route exact path="/addTeacher" element={<UniAddTeacher />} />
                <Route exact path="/matter" element={<UniMainMatter />} />
                <Route exact path="/addMatter" element={<UniAddMatter />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}