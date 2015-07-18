import { FiveHundredPx as FiveHundredPxActionTypes } from "../ActionTypes";
import ApiClient from "../../ApiClient";
import { consumerKey } from "../../../config";

const apiClient = new ApiClient(consumerKey);
const types = FiveHundredPxActionTypes.Photo;

export function getNextPage() {

  // TODO: use redux-actions' `createAction()`
  return dispatch => {
    dispatch({
      type: types.getNextPage,
      // the meta async stuff is based on https://github.com/acdlite/redux-actions/pull/7
      meta: {
        async: "begin",
      }
    });

    apiClient.photos()
      .then(apiJsonResponse => {
        dispatch({
          type: types.getNextPage,
          payload: {
            currentPage: apiJsonResponse.current_page,
            photos: apiJsonResponse.photos,
          },
          meta: {
            async: "end",
          }
        });
      })
      .catch(error => {
        console.log("error getting photos", error);
        dispatch({
          type: types.getNextPage,
          error: true,
          payload: {
            error: {
              status: error.response.status,
              statusText: error.response.statusText,
            }
          },
          meta: {
            async: "end",
          }
        });
      });
  };
}
