import * as api from '../api/api';

export const getUsers = () => {
    return api.getUsers().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            });
}