import React from "react";
import { useFetch } from "../custom-hooks/useFetch";
import { url } from "../routes/routes";
import { Link } from "react-router-dom";

export const UniMainMatter = () => {

    const methodFetch = { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }
    
    const { data } = useFetch(url.matter.list, methodFetch);
    console.log(data);

    return(
        <>
            <h1>Lista de Materias</h1>
            {data ?    
                <table border="1">
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Horario</td>
                            <td>Cantidad maxima de estudiantes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map( item => 
                                <tr key={ item.id }>
                                    <td>{ item.name }</td>
                                    <td>{ item.schedule }</td>
                                    <td>{ item.numberMaxStudents }</td>
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