import React from "react"
import useInput from "../components/useInput"

export default {
  title: "Input",
  component: useInput,
}

export const InputSample = () => {
  const { value, setValue, renderInput } = useInput({ type: "text" })
  return <div>{renderInput()}</div>
}
