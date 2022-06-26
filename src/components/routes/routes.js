let path =  "http://localhost:8080";

export const url = {
    auth: {
        login: path + "/auth/login",
        register: path + "/auth/register"
    },
    home: path + "/home",
    teacher: {
        list: path + "/teacher/",
        add: path + "/teacher/",
        delete: path + "/teacher/" 
    },
    matter: {
        list: path + "/matter/",
        add: path + "/matter/",
        delete: path + "/matter/" 
    }
}

export const methodGet = () => {
    return { 
        method: 'GET', 
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }
}

export const methodPost = ( data ) => {
    return {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }
}

export const methodDelete = ( data ) => {
    return {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: new Headers({
            'Authorization': 'Bearer ' + sessionStorage.getItem('tokenAuth'), 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })
    }
}
