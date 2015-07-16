import keymirror from "keymirror-nested";

const ActionTypes = keymirror({
  Photo: {
    getNextPage: null,
  },
  User: {
    findByUsername: null,
  },
}, "_");

export default ActionTypes;
