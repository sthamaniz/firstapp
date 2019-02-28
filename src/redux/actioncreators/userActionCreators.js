import * as userActions from '../actions/userActions';

import * as userService from '../../services/userService';

export const getUsers = () => dispatch => {
    return userService.getUsers().then(users => dispatch(userActions.getUsers(users)));
}

export const addUser = formData => dispatch => {
    return userService.addUser(formData).then(user => dispatch(userActions.addUser(user)))
}