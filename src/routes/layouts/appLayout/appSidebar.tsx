import { Sidebar, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import logoImg from "@/assets/logo.png"
import { items } from "./sidebarConfig"
import { NavLink } from "react-router-dom"
export const AppSidebar = () => {
    return (
    <Sidebar>
      <div className="bg-red-400">
        <img src={logoImg} alt="" />
      </div>
      <SidebarHeader />
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({id, icon: Icon, title, url}) => {
                return (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton
                    asChild
                    className=" pr-5">
                      <NavLink 
                      to={url}>
                        <Icon/>
                        <span className="bg-red-300">
                          {/* {t(title)} */}
                          ss
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </Sidebar>
  )
}


// TYPE ANNOTATION interface type
//  Omit
//  Pick
// Some Types React.Node CSSPRoperties
// children
//  React.Element
// <T>
// Type Assertion ==> as