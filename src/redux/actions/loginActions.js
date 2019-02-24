import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

import * as api from '../../api/api';

export const login = formData => dispatch => {
    api.login(formData).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {...res.data,status:res.status}
        });
    }).catch(err => {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.response.data
        });
    });
}