import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}