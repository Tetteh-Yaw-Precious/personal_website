import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rem } from "../helpers/Mixins";
import mainimage from "../images/mainimage.svg";
//framer motion
import { motion } from "framer-motion";
//importing animation file
import { nameAnimation, container, fadeIn } from "../animations/Animation";

const Landingpage = () => {
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
        <motion.button variants={fadeIn}>
          <Link to="/Work" className="link">
            Work
          </Link>
        </motion.button>
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
