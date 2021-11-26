import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useLocation } from "react-router";
import mainlogo from "../images/websitelogo.png";
const NavNew = () => {
  const pathname = useLocation();
  return (
    <StyledNav>
      <img src={mainlogo} alt="mylogo" />
      <ul>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "home" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
          <Line />
        </li>
        <li>
          <Link activeClass="active" to="worky" spy={true} smooth={true}>
            Work
          </Link>
          <Line />
        </li>
        <li>
          <Link activeClass="active" to="contacty" spy={true} smooth={true}>
            Contact
          </Link>
          <Line />
        </li>
      </ul>
    </StyledNav>
  );
};
const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  position: absolute;
  bottom: -80%;
  background: green;
`;
const StyledNav = styled.nav`
  position: fixed;
  min-height: 10vh;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  background: white;
  z-index: 3;
  img {
    width: 4%;
  }
  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  .active {
    color: #fe4370;
    font-weight: 700;
  }
`;
export default NavNew;
