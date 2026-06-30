import { createColumnHelper } from "@tanstack/react-table";


const columnHelper = createColumnHelper<ClientTypes>();

export const useClientColumns = () => {
    return [
        columnHelper.accessor('name', {
            header: () => <span>name</span>,
            cell: (info) => <span>{info.getValue()}</span>,
        })
    ]
}