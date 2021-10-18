import React from "react";
import styled from "styled-components";
import Tetteh_Yaw_Precious from "../images/Tetteh_Yaw_Precious.png";

const About = () => {
  return (
    <StyledAbout>
      <div className="abouttext">
        <h4>About</h4>
        <h1>Here is something little about me </h1>
        <p>
          Hello! My name is Tetteh Yaw Precious, 22 years old of age, I love to
          design and work on digital products. Me being introduced closely to
          the tech industry during a three-week boot camp in 2019, gave me the
          urge to know more and add to what I have been introduced to as a
          lifelong learner built and developed my interest in Web development,
          Graphic Design, User Interface Design, and IoT. Since then I’ve worked
          par-time and freelance as Graphic Designer, Brand Identity Designer,
          UI/UX designer and frontend Developer on teams to working on various
          projects. Below are a few technologies and tools I’ve worked with
          recently:
        </p>
      </div>
      <div className="myimage">
        <img src={Tetteh_Yaw_Precious} alt="Tetteh Yaw Precious" />
      </div>
    </StyledAbout>
  );
};
const StyledAbout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  .abouttext {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15%;
    padding-left: 10%;
  }
  .myimage {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 95%;
    }
  }
`;
export default About;
