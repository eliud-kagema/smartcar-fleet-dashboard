import { combineReducers } from 'redux';
import authReducer from './auth';
import vehiclesReducer from './vehicles';


const rootReducer = combineReducers({
  auth: authReducer,
  vehicles: vehiclesReducer,

});

export default rootReducer;