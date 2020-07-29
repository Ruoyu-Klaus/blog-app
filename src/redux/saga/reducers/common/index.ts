/*
@ Public reducer data

*/
import { setRetryTip } from '../../actions/common';
const initialState = {
  retryTip: false,
};

export default (state = initialState, action: ActionParams) => {
  switch (action.type) {
    // TRIGGER ===> send request
    // SUCCESS ===>
    // FAILURE ===>
    // FULFILL ===>
    // REQUEST ===>
    case setRetryTip.TRIGGER:
      return { ...state, retryTip: true };
    default:
      return state;
  }
};
