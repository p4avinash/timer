import React from "react"

const CustomBtn = ({
  text,
  action = () => console.log("no action"),
  type = "primary",
  extraStyles = {},
}) => {
  return (
    <button style={extraStyles} className={`${type}`} onClick={action}>
      {text}
    </button>
  )
}

export default CustomBtn
