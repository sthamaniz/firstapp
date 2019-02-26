import { LOGIN } from './types';

export const login = loginData => {
    return {
        type: LOGIN,
        payload: loginData
    }
}