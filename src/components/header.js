import { Link } from "gatsby"
import React, { useEffect } from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, LightSwitch, Menu } from "../styles/headerStyles"

//context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"

const Header = ({ onCursor, setToggleMenu, toggleMenu }) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">Guy Munday</Link>
          </Logo>
          <LightSwitch
            onClick={toggleTheme}
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
          >
            {currentTheme === "dark" ? "🌞" : "🌚"}
          </LightSwitch>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
