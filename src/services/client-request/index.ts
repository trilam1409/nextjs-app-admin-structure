import axiosInstance from "@/services/client-request/axios-instance";
import { AxiosRequestConfig } from "axios";

interface Props extends AxiosRequestConfig {
  isAuth?: boolean;
}

export async function clientRequest({
  headers,
  url,
  data = {},
  ...props
}: Props) {
  const headerParams: any = { ...headers };

  const { data: dataResponse } = await axiosInstance.request({
    url,
    data,
    ...props,
    headers: headerParams,
  });

  if (
    dataResponse?.status?.code !== undefined &&
    dataResponse?.status?.code !== 200
  ) {
    throw dataResponse;
  }

  return dataResponse;
}
