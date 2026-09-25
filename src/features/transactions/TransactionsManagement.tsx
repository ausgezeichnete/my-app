import { AppTabs } from "@/common/appTab/appTab";
import { useSearchParams } from "react-router-dom";
import { Receivables } from "./receivables/Receivables";
import { Transfers } from "./transfers/Transfers";

export function TransactionsManagement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "receivables";
  type HandleTabChange = (newTab: string) => void;
  const handleTabChange: HandleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };
  return (
    <div>
      <h2>Financial Transactions</h2>
      <div className="flex gap-4.5 mb-5">
        <AppTabs
          tabText="Receivables"
          count={45}
          countColor="green"
          selectedComponent="receivables"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "rcv" || "" ? "border-b-2 border-secondary" : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />

        <AppTabs
          tabText="Transfers"
          count={12}
          countColor="red"
          selectedComponent="transfers"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "transfers" ? "border-b-2 border-secondary " : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />
      </div>
      {tab == `receivables` && <Receivables />}
      {tab == `transfers` && <Transfers />}
    </div>
  );
}
