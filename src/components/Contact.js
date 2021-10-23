import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../helpers/Mixins";
import ContactSocials from "./ContactSocials";
import contact_github from "../images/contact_github.svg";
import contactlinkedin from "../images/contact_linkedin.svg";
import contact_call from "../images/contact_call.svg";
import contact_email from "../images/contact_email.svg";
import copyright from "../images/copyright.svg";
// //import Animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animations/Pageanimation";

const Contact = () => {
  return (
    <StyledContact>
      <h4>Work</h4>
      <h1>get intouch let's work or prolly talk</h1>
      <div className="contact_ct">
        <div className="socials">
          <ContactSocials social={contact_github} socialname="Github" />
          <ContactSocials social={contactlinkedin} socialname="LinkedIn" />
          <ContactSocials social={contact_call} socialname="(+233) 552646695" />
          <ContactSocials
            social={contact_email}
            socialname="precioustetteh38@gmail.com"
          />
          <div className="copyright">
            <div className="copy-ct">
              <img src={copyright} alt="Tetteh Yaw Precious Copyright" />
              <h4>
                TETTEH YAW PRECIOUS | <span>2021</span>
              </h4>
            </div>
          </div>
        </div>
        <form className="contactForm">
          <input type="text" placeholder="Email" />
          <input type="textarea" placeholder="Enter message" />
          <div className="button_ct">
            <button>
              {" "}
              <Link to="/Work" className="link">
                Send
              </Link>
            </button>
          </div>
        </form>
      </div>
    </StyledContact>
  );
};
const StyledContact = styled.div`
  width: 100%;
  min-height: 30vh;
  background-color: #1b1e32;
  padding: 3% 15%;
  display: flex;
  flex-direction: column;
  h4 {
    width: 5%;
    padding: 0 0 0 0;
  }
  h1 {
    margin-bottom: 1rem;
    color: white;
  }
  .contact_ct {
    width: 100%;
    min-height: 55rem;
    display: flex;
    @media ${device.phone} {
      flex-direction: column-reverse;
      min-height: 10rem;
    }
    .socials {
      width: 30%;
      padding-top: 2%;
      @media ${device.phone} {
        width: 100%;
      }
      h4 {
        width: 100%;
        font-weight: 600;
        @media ${device.phone} {
          padding: 1rem;
        }
      }
      .copyright {
        display: flex;
        align-items: flex-end;
        height: 5rem;
        height: 35%;
        @media ${device.phone} {
          padding: 2rem 0;
        }
        .copy-ct {
          display: flex;
          align-items: center;
          img {
            padding-right: 0.7rem;
          }
          h4 {
            width: 100%;
            font-weight: 900;
            color: white;
            border: none;
            span {
              color: #fe4370;
            }
          }
        }
      }
    }
    .contactForm {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      @media ${device.phone} {
        width: 100%;
      }
      input[type="text"] {
        min-height: 10%;
        @media ${device.phone} {
          min-height: 5rem;
        }
        margin-top: 2rem;
        outline: none;
        padding-left: 0.5rem;
      }
      input[type="textarea"] {
        min-height: 45%;
        padding-left: 0.5rem;
        outline: none;
        @media ${device.phone} {
          min-height: 25rem;
        }
      }
      .button_ct {
        display: flex;
        justify-content: flex-end;
        button {
          color: #fe4370;
          &:hover {
            color: white;
          }
        }
      }
    }
  }
`;
export default Contact;
