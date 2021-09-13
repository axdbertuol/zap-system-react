const INITIAL_STATE = {
  messages: [],
  triggers: [],
  channels: [],
};

const messaging = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MESSAGE": {
      console.log("addMessage: " + action.payload.message);
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    }
    case ("DELETE_MESSAGE", "LOAD_MESSAGES"): {
      return {
        ...state,
        messages: action.payload,
      };
    }

    default:
      console.log("nao fiz nada");
      return state;
  }
};

export default messaging;
