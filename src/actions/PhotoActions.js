import { Photo as types } from "./ActionTypes";
import { createAction } from "redux-actions";
import ApiClient from "../ApiClient";
import { consumerKey } from "../../config";

const apiClient = new ApiClient(consumerKey);

export default {
  getNextPage: createAction(
    types.getNextPage,
    async () => {
      let apiJsonResponse = await apiClient.photos();
      console.log("photo action getNextPage", apiJsonResponse);
      return {
        currentPage: apiJsonResponse.current_page,
        photos: apiJsonResponse.photos,
      };
    }
  ),
};
