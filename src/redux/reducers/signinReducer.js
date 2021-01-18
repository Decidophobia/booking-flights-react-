import { SIGNIN } from '../actionTypes';

const initialState = {
  success: false,
  registered: false,
};
export function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        registered: action.payload.success,
        success: action.payload.success,
      };
    default:
      return state;
  }
}
