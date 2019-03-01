import * as userActions from '../actions/userActions';

import * as userService from '../../services/userService';

export const getUsers = (accessToken) => dispatch => {
    return userService.getUsers(accessToken).then(users => dispatch(userActions.getUsers(users)));
}

export const addUser = (accessToken,formData) => dispatch => {
    return userService.addUser(accessToken,formData).then(user => dispatch(userActions.addUser(user)))
}