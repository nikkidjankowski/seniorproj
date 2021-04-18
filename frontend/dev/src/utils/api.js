import axios from 'axios';
axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
   headers: {}

})
api.interceptors.request.use(exitingConfig => {
    if(sessionStorage.token){
        exitingConfig.headers.Authorization =  `Bearer ${sessionStorage.token.replace('"','')}`;
    }
    return exitingConfig;
})

export default api;