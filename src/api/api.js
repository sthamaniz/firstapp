import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json',
    'accesstoken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW5pc2giLCJmaXJzdE5hbWUiOiJtYW5pc2giLCJtaWRkbGVOYW1lIjoiIiwibGFzdE5hbWUiOiJwcmFkaGFuIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwibW9iaWxlIjoiMTIzNDU2Nzg5IiwidHlwZSI6eyJ0eXBlIjoiYWRtaW4iLCJyb2xlIjoxfSwiaWF0IjoxNTUxMjUzMDA2LCJleHAiOjE1NTEzMzk0MDZ9.8Bs4wV8yiMYpJ7qaLN-zTOLB3stZfhquFRNvHcLXPF0'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}