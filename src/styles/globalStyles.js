import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  width: auto;
  height: 100%;
  .iframe {
    margin-bottom: 100px;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
  ${props =>
    props.column &&
    css`
      @media (max-width: 850px) {
        flex-direction: column;
      }
    `};
`

export const Cursor = styled.div`
         position: fixed;
         top: 400px;
         left: 400px;
         width: 32px;
         height: 32px;
         background: var(--color-primary);
         border-radius: 100%;
         transform: translate(-50%, -50%);
         transition: all 0.1s ease-out;
         transition-property: width, height, border;
         will-change: width, height, transform, border;
         pointer-events: none;
         z-index: 999;
         &.pointer {
           border: 3px solid ${props => props.theme.text} !important;
         }
         &.hovered {
           background: transparent !important;
           width: 56px;
           height: 56px;
           border: 3px solid var(--color-primary);
         }
         &.nav-open {
           background: var(--color-primary);
         }
       `
