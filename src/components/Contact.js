import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledContact>
      <h4>Work</h4>
      <h1>get intouch let's work or prolly talk</h1>
      <div className="contact_ct">
        <div className="socials"></div>
        <form className="contactForm"></form>
      </div>
    </StyledContact>
  );
};
const StyledContact = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1b1e32;
  padding: 5%;
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
    div {
      border: 1px solid white;
    }
    .socials {
      width: 30%;
    }
    .contactForm {
      width: 70%;
      border: 1px solid green;
    }
  }
`;
export default Contact;
