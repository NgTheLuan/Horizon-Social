import { combineReducers } from "redux";
import auth from "./authReducer";
import notify from "./notifyReducer";
import alert from "./alertReducer";

export default combineReducers({
  auth,
  notify,
  alert,
});
