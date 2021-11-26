import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import mainlogo from "../images/websitelogo.png";


const Nav = () => {
  return (
    <StyledNav>
      <img src={mainlogo} alt="mylogo" />
      <ul>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
          <Line />
        </li>
        <li>
          <Link to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" spy={true} smooth={true}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const Line = styled(motion.div)`
  height: 0.3rem;
  width: 5%;
  position: absolute;
  background: green;
`;
const StyledNav = styled.nav`
  width: 100%;
  min-height: 5vh;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 4;
  img {
    width: 5%;
  }
  ul {
    display: flex;
    li {
      list-style: none;
      padding-left: 6rem;
      a {
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }

`;
export default Nav;
