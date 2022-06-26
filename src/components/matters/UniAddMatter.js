import React from "react";
import { useForm } from "../custom-hooks/useForm";
import { url } from "../routes/routes";
import { useNavigate, Link } from "react-router-dom";

export const UniAddMatter = () => {
    
    const initForm = {
        name: "",
        schedule: "",
        numberMaxStudents: 0
    }
    const [ form, handleInputChange ] = useForm(initForm);
    const { name, schedule, numberMaxStudents } = form;

    const navigate = useNavigate();

    const methodFetch = {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }

    const sendMatter = () => {
        fetch(url.matter.add, methodFetch)
            .then( () => {
                console.log("Exito al agregar!")
            })
            .catch( error => {
                console.error("Ha ocurrido un error: ",error);
            })
        navigate("/matter");
    }

    return(
        <div>
            <Link to="/matter"><button>Volver</button></Link>
            <form onSubmit={ sendMatter } >
                <span>Nombre: </span>
                    <input 
                        name="name"
                        type="text"
                        onChange={ handleInputChange }
                        value={ name }
                    /><br />
                <span>Horario: </span>
                    <input 
                        name="schedule"
                        type="date"
                        onChange={ handleInputChange }
                        value={ schedule }
                    /><br />
                <span>Numero maximo de estudiantes: </span>
                    <input 
                        name="numberMaxStudents"
                        type="number"
                        onChange={ handleInputChange }
                        value={ numberMaxStudents }
                    /><br />
                <button type="submit" >Enviar</button>
            </form>
        </div>
    );
}