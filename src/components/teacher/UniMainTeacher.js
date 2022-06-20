import React from "react";
import { useFetch } from "../custom-hooks/useFetch";
import { getHeader, url } from "../routes/routes";
import { Link } from "react-router-dom";

export const UniMainTeacher = () => {

    const methodFetch = getHeader();
    
    const { data } = useFetch(url.teacher.list, methodFetch);
    console.log(data);

    return(
        <>
            <h1>Lista de Profesores</h1>
            {data ?    
                <table border="1">
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>DNI</td>
                            <td>Estado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( item => 
                                <tr key={ item.id }>
                                    <td>{ item.name }</td>
                                    <td>{ item.surname }</td>
                                    <td>{ item.dni }</td>
                                    <td>{ item.active ? 'Activo' : 'Inactivo' }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            : 
                <span>No se pudo cargar los datos</span>
            }
            <Link to="/home">Volver</Link>
        </>
    );
}