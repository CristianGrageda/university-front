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
