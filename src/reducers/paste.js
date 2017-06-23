export default function paste(state = [], action) {
  // eslint-disable-next-line no-console
  console.log(action);

  switch (action.type) {
    case "PASTE_POST_SUCCEEDED":
      return action.paste;

    default:
      return state;
  }
}
