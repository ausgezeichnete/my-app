import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./appSidebar";
import { Navbar } from "./navbar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />

            <section className="bg-[#abbbe5] w-full">
                <div className="h-17.5 flex items-center justify-between">
                    <Navbar />
                </div>

                {/* Content */}
                <div className="grid grid-cols-12 grid-row-12 mx-10">
                    <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                        <Outlet />
                    </div>
                </div>
            </section>

        </SidebarProvider>
    )
}
