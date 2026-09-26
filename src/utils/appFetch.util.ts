import axioInstance from "@/lib/axios";
import type { pageParams } from "@/types/types";
import type { AxiosRequestConfig } from "axios";

interface AppFetchProps {
  url: string;
  apiOptions: AxiosRequestConfig;
  customeErrorHandler?: VoidFunction;
  params?: pageParams;
}

export const appFetch = async ({
  url,
  apiOptions,
  customeErrorHandler,
  params,
}: AppFetchProps) => {
  try {
    const response = await axioInstance(url, {
      ...apiOptions,
      params,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    if (customeErrorHandler) {
      customeErrorHandler();
    }
    throw error;
  }
};
