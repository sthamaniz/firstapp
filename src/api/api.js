import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json',
    'accesstoken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW5pc2giLCJmaXJzdE5hbWUiOiJtYW5pc2giLCJtaWRkbGVOYW1lIjoiIiwibGFzdE5hbWUiOiJwcmFkaGFuIiwiZW1haWwiOiJtYW5pc2hAbWFuaXNoLmNvbSIsIm1vYmlsZSI6IjEyMTIxMjIxIiwidHlwZSI6eyJ0eXBlIjoiYWRtaW4iLCJyb2xlIjoiMSJ9LCJpYXQiOjE1NTExODg0MjksImV4cCI6MTU1MTI3NDgyOX0.gZeB7o0stGYmQtTszrF-TTistvNYb8-uEV04oTPsdj8'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}