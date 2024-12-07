import {
    FETCH_VEHICLES_REQUEST,
    FETCH_VEHICLES_SUCCESS,
    FETCH_VEHICLES_FAILURE,
  } from '../actions/vehicles';
  
  const initialState = {
    loading: false,
    vehicles: [],
    error: '',
  };
  
  const vehiclesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_VEHICLES_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case FETCH_VEHICLES_SUCCESS:
        return {
          loading: false,
          vehicles: action.payload,
          error: '',
        };
      case FETCH_VEHICLES_FAILURE:
        return {
          loading: false,
          vehicles: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default vehiclesReducer;