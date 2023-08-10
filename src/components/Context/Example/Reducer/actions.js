import * as at from "./actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [at.SET_IS_LOADING]: (state, args) => {
    return { ...state, isLoading: args.isLoading };
  },
  [at.SET_VALUE]: (state, args) => {
    return { ...state, isLoading: false, value: args.value };
  },
};
