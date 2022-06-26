import React from "react";
import { Link } from "react-router-dom";

export const UniHome = () => {
    return(
        <>
            <h1>Uni home</h1>
            <Link to="/teacher" ><button>Lista de Profesores</button></Link>
            <Link to="/matter" ><button>Lista de Materias</button></Link>
        </>
    );
}