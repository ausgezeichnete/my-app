import AppTable from "@/common/table/table.content";

import FIX_TRANSACTIONS_MOCK_DATA from "./FIX_TRANSACTIONS_MOCK_DATA.json";
import { useFixTransactionsColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useState } from "react";

export const FixTransactions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const columns = useFixTransactionsColumns();

  return (
    <div>
      <h2>Transactions</h2>
      <div className="flex gap-4.5">
        {" "}
        <h3 className="flex justify-between mt-1 mb-3 border-b-2 border-highlight-green">
          Dues{" "}
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">45</span>
          </div>
        </h3>
        <h3 className="flex gap-4.5">
          Transfers
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">45</span>
          </div>
        </h3>
      </div>

      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable data={FIX_TRANSACTIONS_MOCK_DATA} columns={columns} />
    </div>
  );
};
