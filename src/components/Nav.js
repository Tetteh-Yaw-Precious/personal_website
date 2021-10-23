import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import mainlogo from "../images/websitelogo.png";

const Nav = () => {
  return (
    <StyledNav>
      <img src={mainlogo} alt="mylogo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Work">Work</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  width: 100%;
  min-height: 10vh;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  img {
    width: 5%;
  }
  ul {
    display: flex;
    li {
      list-style: none;
      padding-left: 8rem;
      a {
        text-decoration: none;
        font-size: 1.6rem;
        font-weight: 700;
      }
    }
  }
`;
export default Nav;
