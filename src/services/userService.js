import * as api from '../api/api';

export const getUsers = () => {
    return api.getUsers().then(res => {
                return res.data;
            }).catch(err => {
                return err.response.data;
            });
}