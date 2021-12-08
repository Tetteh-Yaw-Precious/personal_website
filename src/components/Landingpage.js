import {React} from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { device, rem } from "../helpers/Mixins";
import mainimage from "../images/mainimage.svg";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Pageanimation";
import { titleAnim, fade, photoAnim } from "../animations/Pageanimation";
import { UseScroll } from "./Usescroll";
import openicon from "../images/openicon.svg";

const Landingpage = ({navStatus,setnavStatus}) => {
  const [element, controls] = UseScroll();
  return (
    <StyledLandingpage id="home">
      <img src={openicon} alt="open icon" className="openicon" onClick={()=>{setnavStatus(!navStatus)}}/>
      <motion.div
        ref={element}
        className="aboutct"
        variants={pageAnimation}
        animate={controls}
        initial="hidden"
        exit="exit"
      >
        <motion.img src={mainimage} alt="bannerimage" variants={photoAnim} />
        <motion.div className="description">
          <motion.h2 variants={titleAnim}>
            Hi, I am <span>Yaw Precious</span>
          </motion.h2>
          <motion.p variants={fade}>
            a self-taught Designer and frontend Developer from Ghana
          </motion.p>
          <motion.button variants={fade}>
            <Link to="worky" spy={true} smooth={true} className="link">
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
  min-height: 100vh;
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
        font-weight: 600;
        span {
          font-size: ${rem(50)};
          color: var(--accent-color);
          font-weight: 700;
        }
      }
      p {
        font-size: ${rem(30)};
        text-align: center;
        font-weight: 500;
      }
    }
  }
  .openicon {
    display: none;
    @media ${device.phone}{
      display: flex;
      position: fixed;
      top: 10rem;
      right: 5rem;
      width: 10%;
      z-index: 10;
    }
  }
`;
export default Landingpage;
