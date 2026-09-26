import type { ApiResponse } from "./../../../types/types.d";
import type { ClientTypes } from "../clients.types";

export const clientsApis = async (props: {
  pageParam: number | false;
  search?: string;
}): Promise<ApiResponse<{ data: ClientTypes[] }>> => {
    return appFetch
};
