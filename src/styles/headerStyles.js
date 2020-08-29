import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 768px) {
    top: 30px;
  }
`
export const Logo = styled.div`
         a {
           font-size: 1.8rem;
           text-decoration: none;
           font-weight: 700;
           color: var(--color-text);
           @media (max-width: 768px) {
             font-size: 1.3rem;
           }
         }
       `

const wiggle = keyframes`
  0% {transform: rotate(0deg); }
  25% {transform: rotate(10deg); }
  50% {transform: rotate(-10deg); }
  100% {transform: rotate(0deg); }
`

export const LightSwitch = styled.p`
  font-size: 1.8rem;
  transition: 0.2s ease;
  position: relative;
  :hover {
    font-size: 2.8rem;
    animation: ${wiggle} 1s ease infinite;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 3px;
      display: block;
      background: var(--color-text);
      margin: 8px;
    }
  }
`
