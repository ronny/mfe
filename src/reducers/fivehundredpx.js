import { FiveHundredPx as types } from "actions/ActionTypes";

const initialState = {
  loading: false,
  currentPage: 0,
  photos: [],
  error: null,
};

// WARNING: `state` here is not the whole app-wide state, just the
// fivehundredpx slice of it!
export default (state = initialState, action) => {
  // console.log("fivehundredpx reducer (state, action)=", state, action);

  // TODO: do it without switch(), e.g. with redux-actions' handleActions()
  switch (action.type) {
    case types.Photo.getNextPage:
      let result = {
        ...state,
        loading: (action.meta && action.meta.async === "begin"),
        error: (action.error ? action.payload.error : null),
      };

      if (!action.error && action.payload) {
        result = {
          ...result,
          currentPage: action.payload.currentPage,
          photos: state.photos.concat(action.payload.photos),
        };
      }

      // console.log("fivehundredpx reducer: result=", result);
      return result;

    default:
      // console.log("fivehundredpx reducer: ignored type:", action.type, state);
      return state;
  }
};
