import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, GET_CURRENT_MENTOR } from './types';

// get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());

    axios.get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        )
};

// get current mentor
export const getCurrentMentor = () => dispatch => {
    dispatch(setProfileLoading());

    axios.get('/api/mentors/current')
        .then(res =>
            dispatch({
                type: GET_CURRENT_MENTOR,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        )
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
    axios.post('/api/profile', profileData)
        .then(res => history.push('/mentordashboard'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// add extra curricular activity
// LEARNING LESSON: HAVE TO PASS IN AS AN OBJECT
export const addActivity = (extActData, history) => dispatch => {
    axios.post('/api/profile/extactivity', {
        activity: extActData
    }).then(res => {
        history.push('/mentordashboard')
    }).catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    ); 
};

// delete extra curricular activity
export const deleteActivity = (index) => dispatch => {
    axios.delete(`/api/profile/extactivity/${index}`)
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data //when we delete experience we get profile back without that deleted experience
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        ); 
};

// add interest
// LEARNING LESSON: HAVE TO PASS IN AS AN OBJECT
export const addInterest = (interestData, history) => dispatch => {
    axios.post('/api/profile/interests', {
        interest: interestData
    }).then(res => {
        history.push('/mentordashboard')
    }).catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    ); 
};

// delete interest
export const deleteInterest = (index) => dispatch => {
    axios.delete(`/api/profile/interests/${index}`)
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data //when we delete experience we get profile back without that deleted experience
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        ); 
};

// Profile loading. This lets reducer know its loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};