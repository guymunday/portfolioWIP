import React from "react"
import { ThemeContext } from "./ThemeContext"
import styled from "styled-components"

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const ThemeToggle = styled.label`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  `

  return (
    <ThemeToggle>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={ev => {
          setColorMode(ev.target.checked ? "dark" : "light")
        }}
      />
      {colorMode === "dark" ? "🌞" : "🌚"}
    </ThemeToggle>
  )
}

export default DarkToggle
