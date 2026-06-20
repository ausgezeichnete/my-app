import { SidebarProvider, SidebarTrigger } from "@/components/sidebar-provider";
import { AppSidebar } from "@/components/app-sidebar";

export default function sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
