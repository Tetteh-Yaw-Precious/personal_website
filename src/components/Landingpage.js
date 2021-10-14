import React from "react";
import styled from "styled-components";
import mainimage from "../images/mainimage.svg";

const Landingpage = () => {
  return (
    <StyledLandingpage>
      <img src={mainimage} alt="bannerimage" />
      <h2>Hi, I am </h2>
    </StyledLandingpage>
  );
};
const StyledLandingpage = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 35%;
  }
`;
export default Landingpage;
