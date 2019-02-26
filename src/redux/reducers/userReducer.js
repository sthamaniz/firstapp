import { GET_USER } from '../actions/types';

export default function (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER :
                return {
                    ...state,
                    users: payload
                };
        default:
            return state;
    }
}