import * as axios from 'axios'

export const SERVER_URL = 'https://fathomless-plains-19083.herokuapp.com'

export const instance = axios.create({      
    baseURL: SERVER_URL + '/api/',    
})
instance.interceptors.request.use(function(config){
    config.headers.Authorization  = 'Bearer ' + localStorage.getItem('token')
    return config    
})