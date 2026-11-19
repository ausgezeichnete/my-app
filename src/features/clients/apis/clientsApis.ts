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
    //fetch data from the api using the appFetch utility function
    url: "/user/get",
    apiOptions: {
      method: "Get",
    },
    customeErrorHandler: () => {
      appToast({
        // show a toast message if there is an error in the api call
        type: "error",
        message: t("clients.error_loading_clients"),
      });
    },
    params: {
      page: +props.pageParam, // convert the pageParam to a number and pass it as a parameter to the api call
      ...(props.search && { search_text: props.search }),
    },
  });
};
