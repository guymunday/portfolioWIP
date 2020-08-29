import React, { useState } from "react"
//Styled Components
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "./ThemeContext"
import { normalize } from "styled-normalize"
//Custom Cursor
import CustomCursor from "../components/customCursor"
//Components
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  /* cursor: none; */
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    background: var(--color-background);
  color: var(--color-text);
}
body {
  font-size: 16px;
  line-height: 1.4;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--color-background);
  color: var(--color-text);
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext() //currentTheme taken fromhere

  const [toggleMenu, setToggleMenu] = useState(false)

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    })
  }

  return (
    <ThemeProvider>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Navigation
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        onCursor={onCursor}
      />
      <main>{children}</main>
      <Footer onCursor={onCursor} />
    </ThemeProvider>
  )
}

export default Layout
