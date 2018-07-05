import { SET_CURRENT_USER } from '../actions/types';
// import isEmpty from '../validation/is-empty';

// initial state for reducer
const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true, //will have to fix this so that it will validate if empty or not
                user: action.payload
            };
        default:
            return state;
    }
}