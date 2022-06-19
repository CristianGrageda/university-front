import { useEffect, useState } from "react"


export const useFetch = (url) => {
    /**
     * Custom Hook para peticiones API
     * @param data: Almacena los resultados de la peticion
     * @param loading: Tiempo de espera en la peticion (será true)
     * @param error: Atrapa los errores causados por la peticion
     */
    const [state, setState] = useState({data:null, loading: true, error:null});

    // Ejecutar solo cuando cambia la consulta (url)
    useEffect(()=>{
        // Actualizamos el loading antes de cada peticion
        setState({data:null, loading:true, error: null});

        // Realizamos la peticion
        fetch(url)
            .then( res => res.json())
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
        ;
    },[url])

    return state;
}