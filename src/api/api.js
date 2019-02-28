import axios from 'axios';

const URI = 'http://localhost:3001/';

const header = {
    'Content-Type' : 'application/json',
    'accesstoken' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW5pc2giLCJmaXJzdE5hbWUiOiJtYW5pc2giLCJtaWRkbGVOYW1lIjoiIiwibGFzdE5hbWUiOiJwcmFkaGFuIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwibW9iaWxlIjoiMTIzNDU2Nzg5IiwidHlwZSI6eyJ0eXBlIjoiYWRtaW4iLCJyb2xlIjoxfSwiaWF0IjoxNTUxMzI2OTExLCJleHAiOjE1NTE0MTMzMTF9.xSIxsGuGkkmwMdcjthdeLuOd4SaRj3yklYbxGkhHSSE'
}

export function login (formData) {
    return axios.post(URI + 'auth', formData, { headers: header })
}

export function getUsers () {
    return axios.get(URI + 'users', { headers: header });
}

export function addUser(formData) {
    return axios.post(URI + 'users', formData, { headers: header });
}