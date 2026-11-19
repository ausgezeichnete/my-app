import { AppTabs } from "@/common/appTab/appTab";
import { useSearchParams } from "react-router-dom";
import { Agents } from "./agents/Agents";
import { AgentsRequests } from "./agentsRequests/AgentsRequests";

export function AgentsManagement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "records";
  type HandleTabChange = (newTab: string) => void;
  const handleTabChange: HandleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };
  return (
    <div>
      <h2>Agents Management</h2>
      <div className="flex gap-4.5 mb-5">
        <AppTabs
          tabText="Records"
          count={45}
          countColor="green"
          selectedComponent="records"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "records" || "" ? "border-b-2 border-secondary" : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />

        <AppTabs
          tabText="Requests"
          count={12}
          countColor="red"
          selectedComponent="requests"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "requests" ? "border-b-2 border-secondary " : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />
      </div>
      {tab === "records" && <Agents />}
      {tab === "requests" && <AgentsRequests />}
    </div>
  );
}
