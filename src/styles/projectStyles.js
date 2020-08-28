import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectSkillsContainer = styled(motion.div)`
  box-sizing: border-box;
  background: ${props => props.theme.pink};
  color: ${props => props.theme.text};
  padding: 10px;
  margin: 50px 0;
  width: 100%;
  overflow: hidden;
  .skill-flex {
    max-width: 850px;
    margin: auto;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .tech-list {
      width: 40%;
      padding-bottom: 20px;
      @media (max-width: 768px) {
        width: 100%;
      }
      &:first-child {
        flex-grow: 2;
        width: 60%;
        padding-right: 30px;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
      a {
        color: ${props => props.theme.text};
        text-decoration: underline;
        font-weight: 600;
        font-size: 1.3rem;
      }
      p {
        font-weight: 450;
        font-size: 1rem;
      }
      ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        li {
          box-sizing: border-box;
          font-weight: 450;
          font-size: 1rem;
          padding-right: 0.5rem;
        }
      }
    }
  }
`

export const ProjectOneColumnFlex = styled(motion.div)`
  display: flex;
  max-width: 900px;
  margin: 50px auto;
`
export const ProjectTwoColumnFlex = styled(motion.div)`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  margin: 50px auto;
`

export const Column = styled(motion.div)`
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden;
`

export const ProjectCopy = styled.p`
  max-width: 850px;
  color: ${props => props.theme.text};
  font-size: 1.3rem;
  font-weight: 450;
  margin: 0 auto 50px auto;
`

export const ProjectOneColumnFlexPadding = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background: ${props => props.theme.pink};
  @media (max-width: 768px) {
    padding: 10px;
  }
`
export const ProjectTwoColumnFlexPadding = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 900px;
  flex-direction: row;
  margin: 50px auto;
  padding: 20px;
  overflow: hidden;
  background: ${props => props.theme.pink};
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`
export const ColumnOne = styled(motion.div)`
  box-sizing: border-box;
  width: 50%;
  overflow: hidden;
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const ColumnTwo = styled(motion.div)`
  box-sizing: border-box;
  width: 50%;
  overflow: hidden;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const HumanRotate = styled.div`
  .top-fun {
    position: relative;
    height: 500px;
    width: 100%;
    overflow: hidden;

    .magazine-rotate {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-style: preserve-3d;
      /* backface-visibility: hidden; */
      will-change: transform;
      pointer-events: none;
      .face {
        position: absolute;
        background-size: cover;
        overflow: hidden;
      }

      .face-cover {
        height: 31vw;
        width: 22vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) translateZ(0.5vw);
      }

      .face-side {
        height: 31vw;
        width: 1vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) rotateY(90deg)
          translateZ(11vw);
      }

      .face-spine {
        height: 31vw;
        width: 1vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) rotateY(-90deg)
          translateZ(11vw);
      }

      .face-top {
        height: 1vw;
        width: 22vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) rotateX(90deg)
          translateZ(15.5vw);
      }

      .face-bottom {
        height: 1vw;
        width: 22vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) rotateX(-90deg)
          translateZ(15.5vw);
      }

      .face-back {
        height: 31vw;
        width: 22vw;
        background: #f5ca36;
        transform: translateX(-50%) translateY(-50%) rotateY(-180deg)
          translateZ(0.5vw);
      }
    }
  }
`
