import React from "react";
import styled from "styled-components";
import { rem } from "../helpers/Mixins";
import mainimage from "../images/mainimage.svg";

const Landingpage = () => {
  return (
    <StyledLandingpage>
      <img src={mainimage} alt="bannerimage" />
      <h2>
        Hi, I am <span>Yaw Precious</span>
      </h2>
      <p>a self-taught Designer and frontend Developer from Ghana</p>
      <button>Work</button>
    </StyledLandingpage>
  );
};
const StyledLandingpage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 35rem;
  }
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
`;
export default Landingpage;
