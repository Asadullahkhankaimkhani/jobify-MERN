import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please priovide all values",
    };
  }
  throw new Error(`no such actions : ${action.type}`);
};

export default reducer;
