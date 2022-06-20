let path =  "http://localhost:8080";

export const url = {
    auth: {
        login: path + "/auth/login",
        register: path + "/auth/register"
    },
    home: path + "/home",
    teacher: {
        list: path + "/teacher"
    },
    matter: {
        list: path + "/matter"
    }
}

export const getHeader = () => {
    return { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }
}
