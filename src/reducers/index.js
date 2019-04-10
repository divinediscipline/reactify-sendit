import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchParcelOrdersReducer from './fetchParcelOrdersReducer';
import createParcelOrderReducer from './createParcelOrderReducer';
import viewSingleOrderReducer from './viewSingleOrderReducer';
import fetchProfileDetailsReducer from './fetchProfileDetailsReducer';


export default combineReducers({
  auth: authReducer,
  fetchParcelOrders: fetchParcelOrdersReducer,
  createParcerOrder: createParcelOrderReducer,
  viewSingleOrder: viewSingleOrderReducer,
  fetchProfileDetails: fetchProfileDetailsReducer,
});
