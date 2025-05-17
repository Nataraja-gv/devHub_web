import { enqueueSnackbar } from "notistack";
import axiosInstance from "../../utils/axiosInstance";

export const postLogout = async () => {
  const config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "/auth/user/logout",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};
