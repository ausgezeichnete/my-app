import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef, //
} from "@tanstack/react-table";
import type { CSSProperties } from "react";

// const columns = [{ accessorKey: 'name', header: 'Name' }]

type AppTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};


const tableStyles: CSSProperties = {
  minWidth: "100%",
  borderCollapse: "collapse",
  marginBottom: "1rem",
};

const theadStyles: CSSProperties = {
  height: 70,
  // backgroundColor: "#01C0AA26",
  textAlign: "left",
};
const thStyles: CSSProperties = {
  padding: 24,
  fontSize: 12,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
};
const thDivStyles: CSSProperties = {
  color: "#000",
  fontWeight: 300,
  fontSize: 16,
};

const tBodyStyles: CSSProperties = {
  backgroundColor: "#FFFFFF",
  textAlign: "center",
};
const trStyles: CSSProperties = {
  borderBottom: "1px solid #E5E7EB",
};

const tdStyles: CSSProperties = {
  paddingInline: 24,
  paddingBlock: 16,
  fontSize: 16,
  height: 80,
};


// TODO::
export default function AppTable<T>({
  data,
  columns,
}: Readonly<AppTableProps<T>>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="rounded-tl-xl rounded-tr-xl overflow-x-auto w-full">
      <table style={tableStyles}>
        <thead style={theadStyles} className="bg-secondary">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th style={thStyles} key={header.id}>
                  <div style={thDivStyles}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody style={tBodyStyles}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} style={trStyles}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={tdStyles}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
