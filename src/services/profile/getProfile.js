import { enqueueSnackbar } from "notistack";
import axiosInstance from "../../utils/axiosInstance";

export const getUserProfile = async () => {
  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "/auth/user/profile",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};



export const patchUserProfile = async (data) => {
  const config = {
    method: "PATCH",
    maxBodyLength: Infinity,
    url: "/auth/user/profile/edit",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};
