import { combineReducers } from 'redux';
import RecieverReducer from './RecieverReducer';
import SenderReducer from './SenderReducer';

export default combineReducers({
    RecieverReducer,
    SenderReducer
})