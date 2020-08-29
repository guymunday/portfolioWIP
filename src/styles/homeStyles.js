import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

const wiggleEmoji = keyframes`
  0% {transform: rotate(0deg); }
  25% {transform: rotate(10deg); }
  50% {transform: rotate(-10deg); }
  100% {transform: rotate(0deg); }
`

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin: 200px 0;
`
export const Content = styled(motion.h2)`
  width: 100%;
  max-width: 850px;
  margin: auto;
  font-size: 1.8rem;
  font-weight: 450;
  color: var(--color-text);
  a {
    color: var(--color-text);
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  span {
    display: inline-block;
    animation: ${wiggleEmoji} 1.5s ease infinite;
  }
`
export const ContentCover = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background: var(--color-primary);
`

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  /* margin-bottom: 200px; */
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  box-sizing: border-box;
  color: var(--color-text);
  video {
    box-sizing: border-box;
    border: var(--color-primary) solid 1px;
  }
  h2 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h3 {
      font-size: 1rem;
      margin-left: 1rem;
      font-weight: 450;
    }
  }
`

export const FeaturedVideo = styled.div`
         z-index: -1;
         display: block;
         overflow: hidden;
         position: relative;
         object-fit: cover;
         .gatsby-image-wrapper {
           height: 100%;
           object-fit: cover;
           border: var(--color-primary) 2px solid;
         }
         .marquee {
           position: absolute;
           bottom: 0;
           left: -20%;
           width: 300%;
           overflow: hidden;
           transform-origin: left center;
           transform: rotate(-45deg);
           background: var(--color-primary);
           box-shadow: 3px 3px 4px #17223b;
           p {
             white-space: nowrap;
             color: var(--color-primary);
             animation: ${marquee} 25s linear infinite;
           }
         }
       `

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`

//ABOUT SECTION

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
`
export const Services = styled.div``

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`
