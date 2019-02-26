import * as api from '../api/api';

export const login = formData => {
    return api.login(formData).then(res => {
                return {...res.data,status:res.status};
            }).catch(err => {
                return {...err.response.data,status:err.response.status};
            });
}