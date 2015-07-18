import keymirror from "keymirror-nested";

const ActionTypes = keymirror({
  FiveHundredPx: {
    Photo: {
      getNextPage: null,
    },
    User: {
      findByUsername: null,
    },
  }
}, "_");

export default ActionTypes;
