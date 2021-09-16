import { authenticateUser } from "../../../services/authApi";
import { persistor } from "../../";
export const login = (email, password) => async (dispatch, getState) => {
  console.log("cheguei");
  const response = await authenticateUser(email, password);
  console.log("RESPONSE", response);
  if (response.data) {
    dispatch({ type: "SET_USER_AUTHORIZED", payload: response.data });
    persistor.persist();
  } else {
    dispatch({ type: "SET_USER_UNATHORIZED" });
  }
};
export const logout = () => (dispatch) => {
  persistor.purge();
  dispatch({ type: "LOGOUT" });
};
