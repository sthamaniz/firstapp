import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json'
}

export function login (formData) {
    return axios
        .post(
            URI + 'auth', formData, {
                headers: header
            }
        )
}

export function getUsers (accessToken) {
    return axios
        .get(
            URI + 'users', {
                headers: { header, accessToken } 
            }
        );
}

export function addUser(accessToken,formData) {
    return axios
        .post(
            URI + 'users', formData, {
                headers: { header, accessToken } 
            }
        );
}