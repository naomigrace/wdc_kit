import React from "react"
import SidebarStyle from "../ui/SidebarStyle"

export default ({children}) => {
    return (
        <SidebarStyle>
            {children}
        </SidebarStyle>
    )
}