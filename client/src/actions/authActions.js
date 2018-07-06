import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// register action
// we are putting this into our redux state
export const registerUser = (mentorData, history) => dispatch => {
    axios.post('/api/mentors/register', mentorData)
        .then(res => history.push('/login')) //goes to login if register is successful
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data //send payload which is the error response
            })
        )
}   

// log in action
export const loginUser = userData => dispatch => {
    // '/login' is the route that gets the token
    // pass in userData
    axios.post('/api/mentors/login', userData)
        .then(res => {
            
            const { token } = res.data;

            // set token to localStorage
            // setItem only gets a string, but token is already a string
            localStorage.setItem('jwtToken', token);

            setAuthToken(token);

            const decoded = jwt_decode(token);

            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        })
}

// set logged in user
export const setCurrentUser = decoded => {
    // dispatch back to user
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');

    // remove auth header for future requests
    setAuthToken(false);

    // set current user to {} which will set is Authenticated to false
    // can see this in redux dev tool
    // we pass in an empty object because it will set it back to its original state from authReducer.js
    dispatch(setCurrentUser({}));    
}