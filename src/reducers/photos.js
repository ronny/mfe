import { Photo as types } from "actions/ActionTypes";
import { handleActions } from "redux-actions";
import initialState from "initialState";

const reducers = handleActions({
  [types.getNextPage]: (state, action) => {
    const { currentPage, currentPagePhotos } = action.payload;
    const photos = state.get("photos");

    console.log("photos reducer: photos", photos);

    return state.merge({
      currentPage: currentPage,
      photos: [...photos, currentPagePhotos],
    });
  },
}, initialState);

export default reducers;
