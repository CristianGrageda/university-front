import React from "react";
import { useFetch } from "../custom-hooks/useFetch";
import { methodGet, methodDelete, url } from "../routes/routes";
import { Link } from "react-router-dom";

export const UniMainMatter = () => {
    
    const { data } = useFetch(url.matter.list, methodGet());
    console.log(data);

    const deleteItem = ( item ) => {
        fetch(url.matter.delete, methodDelete(item))
            .then( () => console.log("Operacion exitosa!") )
            .catch( error => console.error("Ha ocurrido un error:", error) )
        ;
    }

    return(
        <>
            <h1>Lista de Materias</h1>
            <Link to="/addMatter"><button>Agregar Materia</button></Link>
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
                                    <td><button>Modificar</button></td>
                                    <td><button onClick={ () => deleteItem(item) } >Eliminar</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            : 
                <span>No se pudo cargar los datos</span>
            }
            <Link to="/home"><button>Volver</button></Link>
        </>
    );
}