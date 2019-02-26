import * as userActions from '../actions/userActions';

import * as userService from '../../services/userService';

export const getUsers = () => dispatch => {
    return userService.getUsers().then(users => dispatch(userActions.getUsers(users)));
}