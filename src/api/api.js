import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json',
    'accesstoken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW5pc2giLCJmaXJzdE5hbWUiOiJtYW5pc2giLCJtaWRkbGVOYW1lIjoiIiwibGFzdE5hbWUiOiJwcmFkaGFuIiwiZW1haWwiOiJtYW5pc2hAbWFuaXNoLmNvbSIsIm1vYmlsZSI6IjEyMTIxMjIxIiwidHlwZSI6eyJ0eXBlIjoiYWRtaW4iLCJyb2xlIjoiMSJ9LCJpYXQiOjE1NTEyNzc1NTAsImV4cCI6MTU1MTM2Mzk1MH0.hD3KFSyrORnS0bI3cO52YM_XfZ2PYVUQ5W9ogjA-VqA'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}