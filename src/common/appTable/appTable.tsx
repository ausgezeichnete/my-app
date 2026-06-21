//define the types for the AppTable component
export interface AppTableProps {
  columns: Column[];
  data: Record<string, any>[];
  loading: boolean;
}
export interface Column {
  key: string;
  title: string;
}
///end defintions

//create a simple Table
export const tableColumnsHeaders: Column[] = [
  { key: "name", title: "Name" },
  { key: "age", title: "Age" },
  { key: "email", title: "Email" },
];
export const tableData: Record<string, any>[] = [
  { name: "John Doe", age: 30, email: "john.doe@example.com" },
  { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
];

//create another table with different columns and data
export const productTableHeaders: Column[] = [
  { key: "productName", title: "Product Name" },
  { key: "price", title: "Price" },
  { key: "category", title: "Category" },
  { key: "details", title: "Details" },
];
export const productData: Record<string, any>[] = [
  {
    productName: "Laptop",
    price: "$999",
    category: "Electronics",
    details: "High-performance laptop",
  },
  {
    productName: "Smartphone",
    price: "$699",
    category: "Electronics",
    details: "Latest smartphone model",
  },
];
export const AppTable = ({ columns, data, loading }: AppTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            row,
            index, //
          ) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};
