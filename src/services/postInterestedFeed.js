import { enqueueSnackbar } from "notistack";
import axiosInstance from "../utils/axiosInstance";

export const postConnection = async (status, requestId) => {
  const config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `request/send/${status}/${requestId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};

export const postReviewConnection = async (status, requestId) => {
  const config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `/request/review/${status}/${requestId}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};
