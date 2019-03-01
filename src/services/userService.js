import * as api from '../api/api';

export const getUsers = (accessToken) => {
    return api.getUsers(accessToken).then(res => {
                return res.data;
            }).catch(err => {
                return err.response.data;
            });
}

export const addUser = (accessToken,formData) => {
    return api.addUser(accessToken,formData).then(res => {
        return res.data;
    }).catch(err => {
        return err.response.data;
    });
}