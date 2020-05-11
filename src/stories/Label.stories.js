import React from "react"
import { Label } from "../../index"

export default {
    title: "Label",
    component: Label
}

export const LabelSample = () => <Label>This is a regular label</Label>

export const LabelSampleSmall = () => <Label size={`sm`}>This is a small label</Label>