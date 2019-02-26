// import * as loginActions from '../actions/loginActions';

import * as userService from '../../services/userService';

export const getUsers = () => dispatch => {
    return userService.getUsers().then(users => console.log(users));
}