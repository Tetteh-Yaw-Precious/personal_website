import React from "react";
import styled from "styled-components";
import { device } from "../helpers/Mixins";
import Tetteh_Yaw_Precious from "../images/Tetteh_Yaw_Precious.png";
//importing Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Pageanimation";

const About = () => {
  return (
    <StyledAbout>
      <motion.div
        className="mainaboutCt"
        variants={pageAnimation}
        intial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="abouttext">
          <h4>About</h4>
          <h1>Here is something little about me </h1>
          <p>
            Hello! My name is Tetteh Yaw Precious, 22 years old of age, I love
            to design and work on digital products. Me being introduced closely
            to the tech industry during a three-week boot camp in 2019, gave me
            the urge to know more and add to what I have been introduced to as a
            lifelong learner built and developed my interest in Web development,
            Graphic Design, User Interface Design, and IoT. Since then I’ve
            worked par-time and freelance as Graphic Designer, Brand Identity
            Designer, UI/UX designer and frontend Developer on teams to working
            on various projects. Below are a few technologies and tools I’ve
            worked with recently:
          </p>
        </div>
        <div className="myimage">
          <img src={Tetteh_Yaw_Precious} alt="Tetteh Yaw Precious" />
        </div>
      </motion.div>
    </StyledAbout>
  );
};
const StyledAbout = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  overflow: hidden;
  @media ${device.tab_land} {
    font-size: 56.25%;
  }
  @media ${device.tab_port} {
    font-size: 50%;
  }
  @media ${device.phone} {
    flex-direction: column-reverse;
  }
  @media ${device.big_desktop} {
    font-size: 75%;
  }
  .mainaboutCt {
    display: flex;
    .abouttext {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 15%;
      @media ${device.phone} {
        width: 90%;
        padding-top: 0;
        padding-left: 10%;
      }
    }
    .myimage {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${device.phone} {
        width: 80%;
        min-height: 5rem;
      }
      img {
        width: 95%;
        @media ${device.phone} {
          width: 100%;
        }
      }
    }
  }
`;
export default About;
