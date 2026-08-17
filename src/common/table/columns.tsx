import { createColumnHelper } from "@tanstack/react-table";


const columnHelper = createColumnHelper()

export const Columns = [
    columnHelper.accessor("name", {
        header: () => <span>Hello</span>,
        cell: info => info.getValue(),
    })

]