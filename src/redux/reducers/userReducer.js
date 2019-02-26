import { GET_USERS } from '../actions/types';

export default function (state = [], action) {
    const { type, payload } = action;
    
    switch (type) {
        case GET_USERS :
                return {
                    ...state,
                    users: payload
                };
        default:
            return state;
    }
}