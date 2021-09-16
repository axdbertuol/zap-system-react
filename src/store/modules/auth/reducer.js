const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGOUT":
    case "SET_USER_UNAUTHORIZED":
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case "SET_USER_AUTHORIZED":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default auth;
