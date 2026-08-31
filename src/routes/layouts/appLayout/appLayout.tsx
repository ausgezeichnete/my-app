import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./appSidebar";
import { Navbar } from "./navbar";

import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <section className="bg-[#F3F6FE] w-full">
        <div className="h-17.5 flex items-center justify-between">
          <Navbar />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-4 flex-wrap">
          <div className="w-auto">
            <Outlet />
          </div>
        </div>
      </section>
    </SidebarProvider>
  );
}
