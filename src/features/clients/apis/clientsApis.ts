import type { ApiResponse } from "./../../../types/types.d";
import type { ClientsResponseData } from "../clients.types";
import { appFetch } from "@/utils/appFetch.util";
import { appToast } from "@/lib/toast/toast";
import { t } from "i18next";
export const getAllClients = async (props: {
  pageParam: number | false;
  search?: string;
}): Promise<ApiResponse<{ data: ClientsResponseData[] }>> => {
  return appFetch({
    url: "/user/get",
    apiOptions: {
      method: "Get",
    },
    customeErrorHandler: () => {
      appToast({
        type: "error",
        message: t("clients.error_loading_clients"),
      });
    },
    params: {
      page: +props.pageParam,
      ...(props.search && { search_text: props.search }),
    },
  });
};
