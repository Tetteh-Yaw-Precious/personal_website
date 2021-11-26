import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useLocation } from "react-router";
import mainlogo from "../images/websitelogo.png";
import closeicon from "../images/closeicon.svg";
import { device } from "../helpers/Mixins";
const NavNew = ({ navStatus, setnavStatus }) => {
  const pathname = useLocation();
  return (
    <StyledNav>
      <div className={`navbar ${navStatus ? "activeNav" : ""}`}>
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
      </div>
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
  .navbar {
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
    @media ${device.phone} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      transform: translateX(100%);
      transition: all 0.5s ease;
      opacity: 0;
    }
    img {
      width: 4%;
      @media ${device.phone} {
        width: 30%;
      }
    }
    a {
      text-decoration: none;
    }
    ul {
      display: flex;
      list-style: none;
      @media ${device.phone} {
        flex-direction: column;
        height: 50%;
        width: 70%;
        justify-content: space-evenly;
        align-items: center;
      }
      li {
        padding-left: 10rem;
        position: relative;
        @media ${device.phone} {
          padding-left: 0;
          font-size: 2rem;
        }
      }
    }
  }
  .active {
    color: #fe4370;
    font-weight: 700;
  }
  .activeNav {
    transform: translateX(0);
    opacity: 1;
  }
  .closeicon {
    display: none;
    @media ${device.phone} {
      display: block;
      position: fixed;
      top: 10rem;
      right: 5rem;
      width: 10% !important;
    }
  }
`;
export default NavNew;
