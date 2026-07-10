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
import { NavLink } from "react-router-dom";
export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-blue-950">
        <img src={logoImg} alt="" />
      </SidebarHeader>

      <SidebarContent className="bg-blue-950">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ id, icon: Icon, title, url }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild className="pr-5">
                    <NavLink to={url} className="group text-amber-50">
                      <Icon />
                      <span className=" uppercase">{id}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
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
