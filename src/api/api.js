import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const HEADER = {
    'Content-Type': 'application/json'
}

export function auth(formData){

    const path = 'auth';

    return axios.post(API_URL + path, formData, {headers: HEADER});

}