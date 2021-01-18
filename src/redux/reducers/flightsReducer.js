import { GET_FLIGHT } from '../actionTypes';

const initialState = [];

export function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHT:
      return action.payload;
    default:
      return state;
  }
}
