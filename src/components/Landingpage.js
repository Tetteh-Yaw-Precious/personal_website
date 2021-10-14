import React from "react";
import styled from "styled-components";
import mainimage from "../images/mainimage.svg";

const Landingpage = () => {
  return (
    <StyledLandingpage>
      <img src={mainimage} alt="bannerimage" />
      <h2>
        Hi, I am <span>Yaw Precious</span>
      </h2>
      <p>a self-taught Designer and frontend Developer from Ghana</p>
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
    max-width: 35rem;
  }
  h2 {
    span {
      color: var(--accent-color);
    }
  }
`;
export default Landingpage;
