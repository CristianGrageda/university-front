import { useState } from "react"


export const useForm = (initForm) => {

    // Creamos un hook Form con un Form inicial enviado por parametro
    const [form, setForm] = useState(initForm);

    // Detectamos cambios en el form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    return [ form, handleInputChange ];
}