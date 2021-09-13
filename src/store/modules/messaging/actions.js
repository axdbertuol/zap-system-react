// {id, title, price, description, image}
import api from "../../../services/api";

export const addMessage = (message) => {
  // dispatch({ type: "ADD_BOOK_TO_CART", payload: { book } });
  return {
    type: "ADD_MESSAGE",
    payload: {
      message,
    },
  };
};

export const deleteMessageThunk = (id) => async (dispatch, getState) => {
  try {
    await api.delete(`/messages/${id}`);
    const { data } = await api.get("/messages");
    dispatch({ type: "DELETE_MESSAGE", payload: data });
  } catch (error) {
    console.error(error);
  }
};
export const loadMessages = () => async (dispatch) => {
  try {
    const { data } = await api.get("/messages");
    console.log("data", data);
    dispatch({ type: "LOAD_MESSAGES", payload: data });
  } catch (error) {
    console.error(error);
  }
};
export const saveNewMessage = (message) => async (dispatch) => {
  try {
    const { data } = await api.post("/messages", message);
    console.log("response data", data);
    dispatch(addMessage(data));
  } catch (error) {
    console.error(error);
  }
};
