import { authenticateUser } from "../../../services/authApi";

export const login = (email, password) => async (dispatch, getState) => {
  const user = await authenticateUser(email, password);
  if (user) {
    dispatch({ type: "SET_USER_AUTHORIZED", payload: { user } });
  } else {
    dispatch({ type: "SET_USER_UNATHORIZED" });
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
