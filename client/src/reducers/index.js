import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

// use anything from our authReducer in our components will use this.props.auth
export default combineReducers({
    auth: authReducer, 
    errors: errorReducer,
    profile: profileReducer
});