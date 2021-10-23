import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/Mixins";
import mainimage from "../images/mainimage.svg";
//framer motion
import { motion } from "framer-motion";

const Landingpage = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2} },
  };
  const nameAnimation = {
    hidden: { opacity: 0, y: 100, position: "absolute" },
    show: {
      opacity: 1,
      y: 0,
      position: "initial",
      transition: { duration: 0.5 },
    },
  };
  const container = {
    hidden: { x: 10 },
    show: {
      x: 0,
      transition: { duration: 0.75, ease: "ease-out" },
      staggerChildren: 1,
      when: "afterChildren",
    },
  };
  return (
    <StyledLandingpage>
      <motion.img
        src={mainimage}
        alt="bannerimage"
        variants={nameAnimation}
        initial="hidden"
        animate="show"
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="description"
      >
        <motion.h2 variants={fadeIn}>
          Hi, I am <span>Yaw Precious</span>
        </motion.h2>
        <motion.p variants={fadeIn}>
          a self-taught Designer and frontend Developer from Ghana
        </motion.p>
        <motion.button variants={fadeIn}>Work</motion.button>
      </motion.div>
    </StyledLandingpage>
  );
};
const StyledLandingpage = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 35rem;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: ${rem(42)};
      font-weight: 500;
      span {
        font-size: ${rem(50)};
        color: var(--accent-color);
        font-weight: 700;
      }
    }
    p {
      font-size: ${rem(30)};
      text-align: center;
      font-weight: lighter;
    }
  }
`;
export default Landingpage;
