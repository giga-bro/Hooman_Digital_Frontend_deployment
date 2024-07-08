import { Latest } from "@/types/latest";
import axios from "axios";

export const BASE_URL = "https://llmgovserver.onrender.com";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getLatest = async () => {
  return (await axiosInstance.get<Latest>("/latest")).data;
};
