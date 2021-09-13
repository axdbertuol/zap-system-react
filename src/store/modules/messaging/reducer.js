const INITIAL_STATE = {
  messages: [],
  triggers: [],
  channels: [],
};

const messaging = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
    case "DELETE_MESSAGE":
    case "LOAD_MESSAGES": {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case "ADD_TRIGGER":
    case "DELETE_TRIGGER":
    case "LOAD_TRIGGERS": {
      return {
        ...state,
        triggers: action.payload,
      };
    }
    case "ADD_CHANNEL":
    case "DELETE_CHANNEL":
    case "LOAD_CHANNELS": {
      return {
        ...state,
        channels: action.payload,
      };
    }

    default:
      return state;
  }
};

export default messaging;
