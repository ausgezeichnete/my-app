import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";

import FIX_TRANSACTIONS_MOCK_DATA from "./FIX_TRANSACTIONS_MOCK_DATA.json";
import { useFixTransactionsColumns } from "./columns";
import type { FixTransactionType } from "./fixTransactionsTypes";

export const FixTransactions = () => {
  const columns = useFixTransactionsColumns();

  return (
    <div>
      <AppTable
        data={FIX_TRANSACTIONS_MOCK_DATA}
        columns={columns as ColumnDef<FixTransactionType>[]}
      />
    </div>
  );
};
