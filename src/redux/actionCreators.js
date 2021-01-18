import { GET_FLIGHT, SIGNIN } from './actionTypes';

export const getFlightsAC = (payload) => ({
  type: GET_FLIGHT,
  payload,
});

export const signinAC = (payload) => ({
  type: SIGNIN,
  payload,
});
