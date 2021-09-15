import { combineReducers } from "redux";

import messaging from "./messaging/reducer";
import auth from "./auth/reducer";

export default combineReducers({
  messaging,
  auth,
});
