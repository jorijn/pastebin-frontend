export default function alerts(state = [], action) {
  const newState = [...state];

  switch (action.type) {
    case "PASTE_POST_FAILED":
      newState.push({
        title: action.message,
        reasons: action.reasons
      });

      return newState;

    case "DISMISS_ALERT":
      newState.splice(action.index, 1);

      return newState;

    default:
      return state;
  }
}
