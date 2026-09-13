import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logoImg from "@/assets/logo.svg";
import { items } from "./sidebarConfig";
import { NavLink, useLocation, matchPath } from "react-router-dom";

export const AppSidebar = () => {
  const { pathname } = useLocation();

  return (
    <Sidebar className="bg-primary  ">
      <SidebarHeader className="bg-primary">
        <img src={logoImg} alt="Logo" className="bg-transparent" />
      </SidebarHeader>

      <SidebarContent className="bg-primary ">
        <SidebarGroup className="m-0 p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ id, icon: Icon, title, url, name }) => {
                const isActive = !!matchPath(
                  { path: url, end: true },
                  pathname,
                );

                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <NavLink
                        to={url}
                        className={`
                                    group
                                    text-sidebar-foreground
                                    hover:text-sidebar-accent-foreground
                                    hover:bg-sidebar
                                    hover:border-sidebar-border
                                    rounded-none
                                    border-l-4
                                    p-2.5
                                    ${
                                      isActive
                                        ? "bg-sidebar text-sidebar-foreground border-sidebar-border"
                                        : "border-transparent"
                                    }
                                  `}
                      >
                        <Icon />
                        <span className="uppercase">{name}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
