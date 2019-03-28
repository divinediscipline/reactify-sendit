import { combineReducers } from 'redux';
import  authReducer  from './authReducer';
import fetchParcelOrdersReducer from './fetchParcelOrdersReducer';

export default combineReducers({
    auth: authReducer,
    fetchParcelOrders: fetchParcelOrdersReducer
})