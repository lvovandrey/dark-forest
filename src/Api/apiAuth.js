import axios from "axios";

const apiInstanceAuth = axios.create({
    baseURL: 'http://localhost:8089/auth/'
})

export const APIAuth = {
    auth(token){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        return apiInstanceAuth.get('user', config)
            .then((response) => { return response.data })
    },
    
    login(creditionals){
        return apiInstanceAuth.post('login', creditionals)
            .then((response) => response.data)
    }


}
