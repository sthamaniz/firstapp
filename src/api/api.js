import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json',
    'accesstoken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW5pc2giLCJmaXJzdE5hbWUiOiJtYW5pc2giLCJtaWRkbGVOYW1lIjoiIiwibGFzdE5hbWUiOiJwcmFkaGFuIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwibW9iaWxlIjoiMTIzNDU2Nzg5IiwidHlwZSI6eyJ0eXBlIjoiYWRtaW4iLCJyb2xlIjoxfSwiaWF0IjoxNTUxMTY2MDQzLCJleHAiOjE1NTEyNTI0NDN9.--RxRE1tiv0uauf6x3QdPM8i46Y1j0mYQLYpvjiXjZA'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}