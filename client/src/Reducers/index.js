import {combineReducers} from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import chanelReducer from './chanel';
import videoReducer from './video';

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducer,
    videoReducer
})