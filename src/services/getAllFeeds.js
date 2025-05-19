import { enqueueSnackbar } from "notistack";
import axiosInstance from "../utils/axiosInstance";

export const getAllFeeds = async (page, limit) => {
  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "/feeds",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      page,
      limit,
    },
  };
  try {
    const res = await axiosInstance.request(config);
    return res?.data;
  } catch (error) {
    enqueueSnackbar(error.response.data.message, { variant: "error" });
  }
};

export const getAllRequests = async () => {
  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "/request/send/interested/all",
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

export const getAllMyConnections = async () => {
  const config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "/request/received/connection/all",
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
