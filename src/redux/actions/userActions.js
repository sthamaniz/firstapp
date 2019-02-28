import { GET_USERS, ADD_USER } from './types';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
}