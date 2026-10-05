import type { ApiResponse } from "./../../../types/types.d";
import type { ClientsResponseData } from "../clients.types";
import { appFetch } from "@/utils/appFetch.util";
import { appToast } from "@/lib/toast/toast";
import i18n from "@/lib/i18n";

export const getAllClients = async (props: {
  pageParam: number | false;
  search?: string;
}): Promise<ApiResponse<ClientsResponseData>> => {
  return appFetch({
    url: "/user/get",
    apiOptions: {
      method: "Get",
    },
    customeErrorHandler: () => {
      appToast({
        type: "error",
        message: i18n.t("client.error_loading_clients"),
      });
    },
    params: {
      page: +props.pageParam,
      ...(props.search && { search_text: props.search }),
    },
  });
};
