import React from "react";
import { useForm } from "../custom-hooks/useForm";
import { methodPost, url } from "../routes/routes";
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

    const sendMatter = () => {
        fetch(url.matter.add, methodPost(form))
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