export type TableColumn = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  render?: (value: any, row: Record<string, any>) => React.ReactNode; //render is an optional function that takes a value and a row and returns a React node
};

interface AppTableProps {
  columns: TableColumn[];
  data: Record<string, any>[]; //data is an array of objects with string keys and any values
  loading?: boolean; //loading is an optional boolean that indicates whether the table is loading
}
export const AppTable = ({ columns, data, loading = true }: AppTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.header}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.header}>
                {column.render
                  ? column.render(column.accessor(row), row)
                  : column.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
