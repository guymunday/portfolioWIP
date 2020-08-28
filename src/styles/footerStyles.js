import styled from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  margin-top: 296px;
`

export const FooterContent = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 20px;
`

export const ButtonWrap = styled.button`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 30px;
  border: none;
  outline: none;
  background: none;
  padding: 10px;
  transition: 0.5s ease;
  :hover {
    background: ${props => props.theme.pink};
  }
`
