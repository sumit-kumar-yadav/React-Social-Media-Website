import { FETCH_SEARCH_RESULTS_SUCCESS } from '../actions/actionTypes';

const initialSearchState = {
  results: [],
  // loading: null,
  // error: null,
  // success: null    // TODO later
};

export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.users,
      };
    default:
      return state;
  }
}
