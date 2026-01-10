import { LoginCredentials } from '../api_services/AuthService';


export const apiTestData = {
    baseURL: 'https://api.demoblaze.com/login',
    
    auth: {
        validCredentials: {
            username: 'admin123321!@#',
            password: 'YWRtaW4='
        } as LoginCredentials,
        
        invalidCredentials: {
            username: 'invalidUser',
            password: 'invalidPass'
        } as LoginCredentials,
        
        emptyCredentials: {
            username: '',
            password: ''
        } as LoginCredentials
    },

};