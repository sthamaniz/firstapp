import * as loginActions from '../actions/loginActions';

import * as loginService from '../../services/loginService';

export const login = formData => dispatch => {
    return loginService.login(formData).then(loginData => dispatch(loginActions.login(loginData)));
}