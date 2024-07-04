import { Latest } from "@/types/latest";
import axios from "axios";

const BASE_URL = "http://kt6tp538gtb174i9i6hgb15rhs.ingress.tekti.net";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getLatest = async () => {
  return (await axiosInstance.get<Latest>("/latest")).data;
};
