import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null

};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, characters: [], fetching: true, error: "" }
    case SUCCESS:
      return { ...state, characters: action.payload, fetching: false, error: "" }
    case FAILURE:
      return { ...state, characters: [], fetching: false, error: 'Mayday'}
    default:
      return state;
  }
};
