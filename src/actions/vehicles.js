export const FETCH_VEHICLES_REQUEST = 'FETCH_VEHICLES_REQUEST';
export const FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS';
export const FETCH_VEHICLES_FAILURE = 'FETCH_VEHICLES_FAILURE';

export const fetchVehiclesRequest = () => ({
  type: FETCH_VEHICLES_REQUEST,
});

export const fetchVehiclesSuccess = (vehicles) => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: vehicles,
});

export const fetchVehiclesFailure = (error) => ({
  type: FETCH_VEHICLES_FAILURE,
  payload: error,
});