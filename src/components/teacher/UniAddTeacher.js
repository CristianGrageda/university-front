import React from "react";
import { useForm } from "../custom-hooks/useForm";
import { url } from "../routes/routes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const UniAddTeacher = () => {
    
    const initForm = {
        name: '',
        surname: '',
        dni: 0,
        active: true
    }

    const [ form, handleInputChange ] = useForm(initForm);
    const { name, surname, dni } = form;

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

    const sendTeacher = () => {
        fetch(url.teacher.add, methodFetch)
            .then( () => {
                console.log("Exito al agregar!")
            })
            .catch( error => {
                console.error("Ha ocurrido un error: ",error);
            })
        navigate("/teacher");
    }

    return(
        <div>
            <Link to="/teacher"><button>Volver</button></Link>
            <form onSubmit={ sendTeacher } >
                <span>Nombre:</span>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={ handleInputChange } 
                        value={ name } /><br />
                <span>Apellido:</span>
                    <input 
                        type="text" 
                        name="surname" 
                        onChange={ handleInputChange } 
                        value={ surname } /><br />
                <span>DNI:</span>
                    <input 
                        type="number" 
                        name="dni" 
                        onChange={ handleInputChange } 
                        value={ dni } /><br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}