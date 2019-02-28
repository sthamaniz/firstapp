import { GET_USERS, ADD_USER } from '../actions/types';

export default function (state = [], action) {
    const { type, payload } = action;
    
    switch (type) {
        case GET_USERS :
                return {
                    ...state,
                    users: payload
                };
        case ADD_USER :
                return {
                    ...state,
                    user: payload
                };
        default:
            return state;
    }
}