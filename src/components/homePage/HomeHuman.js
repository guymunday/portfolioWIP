import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import TakeAPeek from "../TakeAPeek"
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
} from "../../styles/homeStyles"
// Scroll Animations
import { useInView } from "react-intersection-observer"

const HomeHuman = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 200 },
      }}
    >
      <Container>
        <Link to="/human">
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <FeaturedVideo>
              <video
                loop
                width="100%"
                height="auto"
                autoPlay
                muted
                poster={require("../../assets/images/human/humanMagOpen.jpg")}
                src={require("../../assets/video/humanCoverAnimation.mp4")}
              ></video>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="marquee"
              >
                <TakeAPeek />
              </motion.div>
            </FeaturedVideo>
            <Flex spaceBetween>
              <h2>Human Magazine</h2>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
                <h3>Design {"&"} Development</h3>
              </motion.div>
            </Flex>
          </FeaturedContent>
        </Link>
      </Container>
    </HomeFeaturedSection>
  )
}

export default HomeHuman
