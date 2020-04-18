import React from "react"
import SidebarStyle from "../ui/SidebarStyle"

export default ({children, ...rest}) => {
    return (
        <SidebarStyle {...rest}>
            {children}
        </SidebarStyle>
    )
}