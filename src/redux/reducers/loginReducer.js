import { LOGIN } from '../actions/types';

export default function (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN :
                return {
                    ...state,
                    loginDetails: payload
                };
        default:
            return state;
    }
}