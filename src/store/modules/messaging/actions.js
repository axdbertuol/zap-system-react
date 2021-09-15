// {id, title, price, description, image}
import {
  postMessages,
  fetchMessages,
  editMessage,
  deleteMessage,
  findMessages,
  fetchTriggers,
  editTrigger,
  postTriggers,
  deleteChannel,
  deleteTrigger,
  fetchChannels,
  postChannels,
  editChannel,
} from "../../../services/msgApi";

export const deleteMessageThunk = (id) => async (dispatch, getState) => {
  //checking
  const {
    messaging: { messages },
  } = getState();

  const msgExists = messages.findIndex((msg) => msg.id === id);
  if (msgExists === -1) {
    return;
  }

  await deleteMessage(id);
  dispatch({
    type: "DELETE_MESSAGE",
    payload: messages.filter((message) => message.id !== id),
  });
};
export const loadMessages = () => async (dispatch) => {
  const { data } = await fetchMessages();
  dispatch({ type: "LOAD_MESSAGES", payload: data });
};

export const findMessagesThunk =
  (trigger, channel, timer) => async (dispatch) => {
    const { data } = await findMessages(trigger, channel, timer);
    dispatch({ type: "LOAD_SEARCH_MSGS", payload: data });
  };

export const saveNewMessage = (newMessage) => async (dispatch, getState) => {
  const {
    messaging: { messages },
  } = getState();

  //checking
  const msgExists = messages.findIndex((msg) => msg.id === newMessage.id);
  if (msgExists !== -1) {
    // TODO: return error message already exists
    return;
  }

  const { data } = await postMessages(newMessage);
  console.log("response data", data);
  dispatch({
    type: "ADD_MESSAGE",
    payload: [...messages, data],
  });
};
export const editMessageThunk = (msgToEdit) => async (dispatch, getState) => {
  const {
    messaging: { messages },
  } = getState();

  const msgExists = messages.findIndex((msg) => msg.id === msgToEdit.id);
  if (msgExists === -1) {
    // TODO: return error message does not exist
    return;
  }

  const { data } = await editMessage(msgToEdit);
  dispatch({
    type: "LOAD_MESSAGES",
    payload: [...messages.filter((msg) => msg.id !== msgToEdit.id), data],
  });
};

/**
 *  TRIGGERS
 */
export const deleteTriggerThunk = (id) => async (dispatch, getState) => {
  //checking
  const {
    messaging: { triggers },
  } = getState();

  const trigExists = triggers.findIndex((trig) => trig.id === id);
  if (trigExists === -1) {
    return;
  }

  await deleteTrigger(id);
  dispatch({
    type: "DELETE_TRIGGER",
    payload: triggers.filter((trigger) => trigger.id !== id),
  });
};

export const loadTriggers = () => async (dispatch) => {
  const { data } = await fetchTriggers();
  dispatch({ type: "LOAD_TRIGGERS", payload: data });
};
export const saveNewTrigger = (newTrigger) => async (dispatch, getState) => {
  const {
    messaging: { triggers },
  } = getState();

  //checking
  const msgExists = triggers.findIndex((trig) => trig.id === newTrigger.id);
  if (msgExists !== -1) {
    // TODO: return error trigger already exists
    return;
  }

  const { data } = await postTriggers(newTrigger);
  console.log("response data", data);
  dispatch({
    type: "ADD_TRIGGER",
    payload: [...triggers, data],
  });
};
export const editTriggerThunk = (trigToEdit) => async (dispatch, getState) => {
  const {
    messaging: { triggers },
  } = getState();

  const trigExists = triggers.findIndex((trig) => trig.id === trigToEdit.id);
  if (trigExists === -1) {
    // TODO: return error trigger does not exist
    return;
  }

  const { data } = await editTrigger(trigToEdit);
  dispatch({
    type: "LOAD_TRIGGERS",
    payload: [...triggers.filter(({ id }) => id !== trigToEdit.id), data],
  });
};

/**
 * CHANNELS
 */

/**
 *
 * @param {number} id
 * @returns
 */
export const deleteChannelThunk = (id) => async (dispatch, getState) => {
  //checking
  const {
    messaging: { channels },
  } = getState();

  const channelExists = channels.findIndex((channel) => channel.id === id);
  if (channelExists === -1) {
    return;
  }

  await deleteChannel(id);
  dispatch({
    type: "DELETE_CHANNEL",
    payload: channels.filter((channel) => channel.id !== id),
  });
};
/**
 * Load channels from api server to state
 * @returns
 */
export const loadChannels = () => async (dispatch) => {
  const { data } = await fetchChannels();
  dispatch({ type: "LOAD_CHANNELS", payload: data });
};

export const saveNewChannel = (newChannel) => async (dispatch, getState) => {
  const {
    messaging: { channels },
  } = getState();

  //checking
  const index = channels.findIndex((msg) => msg.id === newChannel.id);
  if (index !== -1) {
    // TODO: return error channel already exists
    return;
  }

  const { data } = await postChannels(newChannel);
  console.log("response data", data);
  dispatch({
    type: "ADD_CHANNEL",
    payload: [...channels, data],
  });
};

export const editChannelThunk =
  (channelToEdit) => async (dispatch, getState) => {
    const {
      messaging: { channels },
    } = getState();

    const channelExists = channels.findIndex(
      (channel) => channel.id === channelToEdit.id
    );
    if (channelExists === -1) {
      // TODO: return error channel does not exist
      return;
    }

    const { data } = await editChannel(channelToEdit);

    dispatch({
      type: "LOAD_CHANNELS",
      payload: [...channels.filter(({ id }) => id !== channelToEdit.id), data],
    });
  };
