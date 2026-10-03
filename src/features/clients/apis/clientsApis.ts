import type { ApiResponse } from "./../../../types/types.d";
import type { ClientTypes } from "../clients.types";
import { appFetch } from "@/utils/appFetch.util";
import { appToast } from "@/lib/toast/toast";

export const getAllClients = async (props: {
  pageParam: number | false;
  search?: string;
}): Promise<ApiResponse<ClientTypes>> => {
  return appFetch({
    url: "/user/get",
    apiOptions: {
      method: "Get",
    },
    customeErrorHandler: () => {
      appToast({ type: "error", message: "client.error_loading_clients" });
    },
    params: {
      page: +props.pageParam,
      ...(props.search && { search_text: props.search }),
    },
  });
};
