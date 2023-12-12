import {combineReducers} from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import chanelReducer from './chanel';
import videoReducer from './video';
import likedVideoReducer from './likedVideo';

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducer,
    videoReducer,
    likedVideoReducer
})