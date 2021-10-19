import React from "react";
import styled from "styled-components";
import ContactSocials from "./ContactSocials";
import contact_github from "../images/contact_github.svg";
import contactlinkedin from "../images/contact_linkedin.svg";
import contact_call from "../images/contact_call.svg";
import contact_email from "../images/contact_email.svg";
import copyright from "../images/copyright.svg";

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
            <button>Work</button>
          </div>
        </form>
      </div>
    </StyledContact>
  );
};
const StyledContact = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1b1e32;
  padding: 5% 15%;
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
    .socials {
      width: 30%;
      padding-top: 2%;
      h4 {
        width: 80%;
        font-weight: 600;
      }
      .copyright {
        display: flex;
        align-items: flex-end;
        height: 5rem;
        height: 35%;
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
      input[type="text"] {
        min-height: 10%;
        margin-top: 2rem;
        outline: none;
        padding-left: 0.5rem;
      }
      input[type="textarea"] {
        min-height: 45%;
        padding-left: 0.5rem;
        outline: none;
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
