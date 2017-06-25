export default function paste(state = [], action) {
  switch (action.type) {
    case "PASTE_POST_SUCCEEDED":
    case "PASTE_GET_SUCCEEDED":
      return action.paste;

    default:
      return state;
  }
}
