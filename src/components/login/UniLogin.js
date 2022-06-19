import React from "react";
import { useForm } from "../custom-hooks/useForm";

export const UniLogin = () => {

    const initForm = {
        username: '',
        password: ''
    };

    const [ form, handleInputChange ] = useForm(initForm);

    const { username, password } = form;

    const handleForm = (e) => {
        e.preventDefault();
        console.log("form: ", form);
        fetch("http://localhost:8080/auth/login", {
            method: 'POST',
            body: JSON.stringify(form),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    return(
        <form onSubmit={ handleForm } >
            <input type="text" name="username" placeholder="Usuario" onChange={ handleInputChange } value={ username } />
            <input type="password" name="password" onChange={ handleInputChange } value={ password } />
            <button type="submit">Login</button>
        </form>
    );
}