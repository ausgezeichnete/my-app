import {
  useTable,
  tableFeatures,
  flexRender,
  columnVisibilityFeature,
  type ColumnDef,
} from "@tanstack/react-table";

export const features = tableFeatures({
  columnVisibilityFeature,
});
type AppTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, unknown>[]; // TODO:: Check This Type
  isLoading?: boolean;
  loadingSkeletonsNumber?: number;
  paginationRef?: (node?: Element | null) => void;
  onRowClick?: (row: T) => void;
};

const tableStyles: CSSProperties = {
  minWidth: "100%",
  borderCollapse: "collapse",
  marginBottom: "1rem",
};

const theadStyles: CSSProperties = {
  height: 70,
  backgroundColor: "var(--color-secondary-accent)",
  textAlign: "center",
};
const thStyles: CSSProperties = {
  padding: 24,
  fontSize: 12,
  textTransform: "uppercase",
  // whiteSpace: "nowrap",
};
const thDivStyles: CSSProperties = {
  color: "#000",
  fontWeight: 300,
  fontSize: 16,
};

const tBodyStyles: CSSProperties = {
  backgroundColor: "#FFFFFF",
};
const trStyles: CSSProperties = {
  borderBottom: "1px solid var(--table-border)",
};

const tdStyles: CSSProperties = {
  paddingInline: 24,
  paddingBlock: 16,
  fontSize: 16,
  height: 80,
  textAlign: "center",
};

// TODO::
export default function AppTable<T>({
  data,
  columns,
  isLoading = false,
  loadingSkeletonsNumber = 10,
  paginationRef,
  onRowClick,
}: Readonly<AppTableProps<T>>) {
  const table = useTable({
    data,
    columns,
    features,
  });

  return (
    <div className="w-full overflow-x-auto rounded-tl-xl rounded-tr-xl">
      <table style={tableStyles}>
        <thead style={theadStyles} className="bg-gray-50 hover:bg-zinc-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={thStyles}>
                  <div style={thDivStyles}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
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
          {isLoading ? (
            Array.from({ length: loadingSkeletonsNumber }).map(
              (_, rowIndex) => {
                const rowKey = `skeleton-row-${rowIndex}`;

                return (
                  <tr key={rowKey} style={trStyles}>
                    {columns.map((_, colIndex) => {
                      const columnKey = `skeleton-col-${colIndex}`;

                      return (
                        <td key={`${rowKey}-${columnKey}`} style={tdStyles}>
                          <div className="mx-auto h-4 w-3/4 animate-pulse rounded-full bg-[#E5EEEB]" />
                        </td>
                      );
                    })}
                  </tr>
                );
              },
            )
          ) : !isLoading && data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={tdStyles}
                className="text-center"
              >
                No Data
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                style={trStyles}
                onClick={() => onRowClick?.(row.original)}
                className={onRowClick ? "cursor-pointer" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={tdStyles}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div ref={paginationRef} />
    </div>
  );
}
