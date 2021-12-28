import React from "react";
import styled from "styled-components";
import { device } from "../helpers/Mixins";
import ContactSocials from "./ContactSocials";
import contact_github from "../images/contact_github.svg";
import contactlinkedin from "../images/contact_linkedin.svg";
import copyright from "../images/copyright.svg";
// //import Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animations/Pageanimation";
import { UseScroll } from "./Usescroll";

const Contact = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledContact id="contacty">
      <motion.div
        ref={element}
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        <motion.h4 variants={titleAnim}>Contact</motion.h4>
        <h1>get intouch let's work or prolly talk</h1>
        <div className="contact_ct">
          <div className="socials">
            <ContactSocials
              social={contact_github}
              socialname="Github"
              path="https://github.com/Tetteh-Yaw-Precious"
            />
            <ContactSocials
              social={contactlinkedin}
              socialname="LinkedIn"
              path="https://www.linkedin.com/in/precious-tetteh-431b0418b/"
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
          <form
            className="contactForm"
            action="https://formspree.io/f/xjvlkyrl"
            method="POST"
          >
            <input type="text" placeholder="Email" name="Email" required />
            <textarea
              name="Message"
              placeholder="Write email"
              required
            ></textarea>
            <div className="button_ct">
              <button type="submit" className="submitBtn">
                Send
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </StyledContact>
  );
};
const StyledContact = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1b1e32;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  padding-top: 10%;
  overflow: hidden;
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
    min-height: 50rem;
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
      textarea {
        padding-left: 0.5rem;
        padding-top: 2rem;
        outline: none;
        height: 45%;
        outline: none;
        resize: none;
        @media ${device.phone} {
          min-height: 25rem;
        }
      }
      .button_ct {
        display: flex;
        justify-content: flex-end;
        .submitBtn {
          padding: 1rem 6rem;
          color: #fe4370 !important;
          &:hover {
            color: white !important;
          }
        }
      }
    }
  }
`;
export default Contact;
