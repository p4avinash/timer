import React from "react"

const CustomInput = ({ type = "text", placeholder = "", onChange, value }) => {
  const [test, setTest] = React.useState("testing")
  return (
    <input
      type={`${type}`}
      // onChange={(e) => setTest(e.target.value)}
      onChange={onChange}
      value={value}
      placeholder={`${placeholder}`}
    />
  )
}

export default CustomInput
