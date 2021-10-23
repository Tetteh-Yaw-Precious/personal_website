import React from "react";
import styled from "styled-components";
//importing mediaquery manger
import { device } from "../helpers/Mixins";
const ContactSocials = ({ social, socialname }) => {
  return (
    <SocialCard>
      <img src={social} alt="Tetteh Yaw Precious github" />
      <h4>{socialname}</h4>
    </SocialCard>
  );
};

const SocialCard = styled.div`
  border-bottom: 0.15rem solid white;
  width: 80%;
  min-height: 10%;
  display: flex;
  align-items: center;
  @media ${device.phone}{
    width: 100%;
  }
  img {
    padding: 0 1.5rem 0 0;
    width: 10%;
    @media ${device.phone}{
    width: 12%;
  }

  }
  h4 {
      width: 100%;
    color: white;
    border-bottom: none;
  }
`;
export default ContactSocials;
