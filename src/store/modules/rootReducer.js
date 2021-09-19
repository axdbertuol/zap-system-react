import { combineReducers } from "redux";

import auth from "./auth/reducer";
import messaging from "./messaging/reducer";

export default combineReducers({
  messaging,
  auth,
});
