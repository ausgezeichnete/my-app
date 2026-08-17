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
import logoImg from "@/assets/newlogo.png";
import { items } from "./sidebarConfig";
import { NavLink, useLocation } from "react-router-dom";

export const AppSidebar = () => {
  const location = useLocation();
  // {
  //   console.log(location);
  // }

  const itemActive = (id?: string) => {
    if (id === "main") return location.pathname === "/";
    return (
      location.pathname === `/${id}` || location.pathname.startsWith(`/${id}/`)
    );
  };

  return (
    <Sidebar>
      <SidebarHeader className="bg-primary">
        <img src={logoImg} alt="Logo" />
      </SidebarHeader>

      <SidebarContent className="bg-primary">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ id, icon: Icon, title, url }) => {
                const active = itemActive(id);
                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton
                      asChild
                      className={active ? "active pr-5 bg " : "pr-5"}
                    >
                      <NavLink
                        to={url}
                        onClick={() => id}
                        className="group text-amber-50 "
                      >
                        <Icon />
                        <span className="uppercase">{id}</span>
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

// TYPE ANNOTATION interface type
//  Omit
//  Pick
// Some Types React.Node CSSPRoperties
// children
//  React.Element
// <T>
// Type Assertion ==> as
