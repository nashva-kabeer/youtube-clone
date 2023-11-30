import {combineReducers} from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import chanelReducer from './chanel'

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducer
})