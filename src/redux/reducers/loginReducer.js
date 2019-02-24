import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

let initialState = {
    userDetails: {},
    errorDetails: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS :
                return {
                    ...state,
                    loggedIn: true,
                    userDetails: action.payload
                };
        case LOGIN_FAILURE :
                return {
                    ...state,
                    loggedIn: false,
                    errorDetails: action.payload
                };
        default:
            return state;
    }
}