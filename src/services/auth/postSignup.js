import { enqueueSnackbar } from "notistack";
import axiosInstance from "../../utils/axiosInstance";

export const postSignUp = async (data) => {
  const config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "/auth/user/signup",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};

export const postSignIn = async (data) => {
  const config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "/auth/user/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};

export const patchForgotPassword = async (data) => {
  const config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: "/auth/user/forgotpassword",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};
