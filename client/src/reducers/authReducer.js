import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';

// initial state for reducer
// this is what we will see in redux dev tool. In the 'State' tab
const initialState = {
    isAuthenticated: false,
    mentor: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload), //will have to fix this so that it will validate if empty or not
                mentor: action.payload
            };
        default:
            return state;
    }
};