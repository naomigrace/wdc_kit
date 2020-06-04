import React from "react"
import A from "../styled/A"

export default {
    title: "Anchor",
    component: A
}

export const AnchorSample = () => <A href="#">This is a regular link</A>

export const AnchorSampleSmall = () => <A href="#" size={`sm`}>This is a small link</A>