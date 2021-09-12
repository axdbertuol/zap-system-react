const INITIAL_STATE = {
  items: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_CART":
      console.log(state);

      const { book } = action.payload;

      return {
        ...state,
        items: [...state.items, book],
      };

    default:
      console.log("nao fiz nada");
      return state;
  }
};

export default cart;
