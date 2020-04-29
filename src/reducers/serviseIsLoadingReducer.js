import { IS_LOADING_REQUEST, IS_LOADING_FAILURE, IS_LOADING_SUCCESS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isError: null,
};

export default function serviceIsLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING_REQUEST:
      return {...state, isLoading: true};

    case IS_LOADING_FAILURE:
      console.log(action.payload);  
      const { error } = action.payload;
      return {...state, isLoading: false, isError: error };

    case IS_LOADING_SUCCESS:
      return {...initialState};

    default:
      return state;
  }
}
