import axios from 'axios';

const setAuthToken = token => {
    // if token exists, place the token with key Authorization in header
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // else delete the header with key Authorization
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;