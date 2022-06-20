import React from "react";
import { Link } from "react-router-dom";

export const UniHome = () => {
    return(
        <>
            <h1>Uni home</h1>
            <Link to="/teacher" >Lista de Profesores</Link>
        </>
    );
}