import axiosApi from "./axiosApi";

export const fetchMessages = async () => {
  try {
    const response = await axiosApi.get("/messages");
    return response;
  } catch (error) {
    console.error("fetchMessages", error);
  }
};
export const findMessage = async (id) => {
  try {
    const response = await axiosApi.get(`/messages/${id}`);
    return response;
  } catch (error) {
    console.error("findMessage", error);
  }
};
export const postMessages = async (messages) => {
  try {
    const response = await axiosApi.post("/messages", messages);
    return response;
  } catch (error) {
    console.error("postMessages", error);
  }
};
export const editMessage = async (msgToEdit) => {
  try {
    const response = await axiosApi.put(`/messages/${msgToEdit.id}`, msgToEdit);
    return response;
  } catch (error) {
    console.error("editMessage", error);
  }
};
export const deleteMessage = async (id) => {
  try {
    const response = await axiosApi.delete(`/messages/${id}`);
    return response;
  } catch (error) {
    console.error("deleteMessage", error);
  }
};

export const fetchTriggers = async () => {
  try {
    const response = await axiosApi.get("/triggers");
    return response;
  } catch (error) {
    console.error("fetchTriggers", error);
  }
};
export const findTrigger = async (id) => {
  try {
    const response = await axiosApi.get(`/triggers/${id}`);
    return response;
  } catch (error) {
    console.error("findTrigger", error);
  }
};
export const postTriggers = async (triggers) => {
  try {
    const response = await axiosApi.post("/triggers", triggers);
    return response;
  } catch (error) {
    console.error("postTriggers", error);
  }
};
export const editTrigger = async (trigToEdit) => {
  try {
    const response = await axiosApi.put(
      `/triggers/${trigToEdit.id}`,
      trigToEdit
    );
    return response;
  } catch (error) {
    console.error("editTrigger", error);
  }
};
export const deleteTrigger = async (id) => {
  try {
    const response = await axiosApi.delete(`/triggers/${id}`);
    return response;
  } catch (error) {
    console.error("deleteTrigger", error);
  }
};

// CHANNELS
export const fetchChannels = async () => {
  try {
    const response = await axiosApi.get("/channels");
    return response;
  } catch (error) {
    console.error("fetchChannels", error);
  }
};
export const findChannel = async (id) => {
  try {
    const response = await axiosApi.get(`/channels/${id}`);
    return response;
  } catch (error) {
    console.error("findChannel", error);
  }
};
export const postChannels = async (channels) => {
  try {
    const response = await axiosApi.post("/channels", channels);
    return response;
  } catch (error) {
    console.error("postChannels", error);
  }
};
export const editChannel = async (channelToEdit) => {
  try {
    const response = await axiosApi.put(
      `/channels/${channelToEdit.id}`,
      channelToEdit
    );
    return response;
  } catch (error) {
    console.error("editChannel", error);
  }
};
export const deleteChannel = async (id) => {
  try {
    const response = await axiosApi.delete(`/channels/${id}`);
    return response;
  } catch (error) {
    console.error("deleteChannel", error);
  }
};
