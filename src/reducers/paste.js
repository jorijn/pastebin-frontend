export default function paste(state = [], action) {
  switch (action.type) {
    case "PASTE_POST_SUCCEEDED":
      return action.paste;

    default:
      return state;
  }
}
