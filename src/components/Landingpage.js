import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { rem } from "../helpers/Mixins";
import mainimage from "../images/mainimage.svg";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Pageanimation";

const Landingpage = () => {
  return (
    <StyledLandingpage>
      <motion.div
        className="aboutct"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.img src={mainimage} alt="bannerimage" />
        <motion.div className="description">
          <motion.h2>
            Hi, I am <span>Yaw Precious</span>
          </motion.h2>
          <motion.p>
            a self-taught Designer and frontend Developer from Ghana
          </motion.p>
          <motion.button>
            <Link to="/Work" className="link">
              Work
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </StyledLandingpage>
  );
};

const StyledLandingpage = styled.div`
display: flex;
align-items: center;
justify-content: center;
min-height: 90vh;
  .aboutct {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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
  }
`;
export default Landingpage;
