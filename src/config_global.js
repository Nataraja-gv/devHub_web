// export const BASE_URL =import.meta.env.VITE_FRONTEND_BASE_URL;
export const BASE_URL =
  location.hostname === "localhost"
    ? import.meta.env.VITE_FRONTEND_BASE_URL
    : import.meta.env.VITE_FRONTEND_BASE_URL_PROD;

export const RAZOR_KeyId = import.meta.env.VITE_Razor_key_id;
