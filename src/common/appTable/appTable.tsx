export interface AppTableProps {
  columns: any[]; // Define the type for columns, you can replace 'any' with a more specific type based on your column structure
  data: any[];
  loading: boolean;
}

export const AppTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data</td>
          <td>Data</td>
        </tr>
      </tbody>
    </table>
  );
};
