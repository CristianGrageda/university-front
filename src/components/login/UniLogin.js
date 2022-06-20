import React from "react";
import { useForm } from "../custom-hooks/useForm";
import { url } from "../routes/routes";
import { useNavigate } from "react-router-dom";

export const UniLogin = () => {

    const initForm = {
        username: '',
        password: ''
    };

    const [ form, handleInputChange ] = useForm(initForm);

    const navigate = useNavigate();
    
    const { username, password } = form;
    
    const methodFetch = {
        method: 'POST',
        body: JSON.stringify(form),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        fetch( url.auth.login, methodFetch).then(res => res.json())
            .then(response => {
                console.log('Success:', response);
                if(response.token) sessionStorage.setItem('tokenAuth', response.token);
                navigate("/home");
            })
            .catch(error => console.error('Error:', error));
    }

    return(
        <form onSubmit={ handleForm } >
            <input type="text" name="username" placeholder="Usuario" onChange={ handleInputChange } value={ username } />
            <input type="password" name="password" onChange={ handleInputChange } value={ password } />
            <button type="submit">Login</button>
        </form>
    );
}