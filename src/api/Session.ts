import axios, { AxiosRequestConfig } from "axios";
import { apiHost, apiVersion } from "./Consts";

export async function requestSession() {
  const options: AxiosRequestConfig = {
    url: apiHost + `/api/${apiVersion}/auth/sess/request`,
  };

  const res = await axios(options);

  return res.status === 200;
}

