import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_CURRENT_MENTOR } from '../actions/types';

const initialState = {
    profile: null,
    profiles: null, //array of profiles
    loading: false //set this to false because we will be fetching the profiles. if still fetching we can show a loader
}

// basic setup
export default function(state = initialState, action) {
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        case GET_CURRENT_MENTOR:
            return {
                ...state,
                mentor: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null,
            }
        default: 
            return state;
    }
};