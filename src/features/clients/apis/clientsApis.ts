import type { ApiResponse } from "./../../../types/types.d";
import type { ClientsResponseData } from "../clients.types";
import { appFetch } from "@/utils/appFetch.util";
import { appToast } from "@/lib/toast/toast";
import i18n from "@/lib/i18n";

export const getAllClients = async (props: {
  pageParam: number | false; // pageParam is a number or false, which is used to determine the page number for pagination
  search?: string; // search is an optional string parameter, which is used to filter the clients based on the search text
}): Promise<ApiResponse<ClientsResponseData>> => {
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
        message: i18n.t("client.error_loading_clients"), // translate the error message using the i18n library
      });
    },
    params: {
      page: +props.pageParam, // convert the pageParam to a number and pass it as a parameter to the api call
      ...(props.search && { search_text: props.search }),
    },
  });
};
