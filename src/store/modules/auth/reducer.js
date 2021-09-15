const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default auth;
