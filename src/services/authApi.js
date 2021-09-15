import axiosInstance from "./axiosInstance";

export const authenticateUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth-user", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("authenticate error", error);
  }
};
