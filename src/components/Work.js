import React from "react";
import styled from "styled-components";
import { device } from "../helpers/Mixins";
import ProjectCardCase from "./ProjectCardCase";
import github from "../images/githublogo.svg";
import behance from "../images/behance.svg";
import code from "../images/code.svg";
import BrandIdentity from "./BrandIdentity";
import Comingsoon from "./Comingsoon";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animations/Pageanimation";
import { UseScroll } from "./Usescroll";

const Work = () => {
  const [element, controls] = UseScroll();
  return (
    <StyledWork id="worky">
      <motion.div
        ref={element}
        className="workCt"
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        <motion.h4 variants={titleAnim}>Work</motion.h4>
        <h1>a couple of my projects so far</h1>
        <div className="projects">
          <ProjectCardCase
            worktype={code}
            gitRepo={github}
            designtype={behance}
            path={
              "https://www.behance.net/gallery/134009815/KTU-school-registration-System-Case-study?"
            }
            repolink={
              "https://github.com/Tetteh-Yaw-Precious/School-Registration-system"
            }
            weblink={"https://epic-bardeen-3e74a3.netlify.app/index.html"}
            projectName="School Registration System"
            projectCat="Registration system for freshers (ux study)"
            techused="Figma | Ai | html | scss | Javascript | firebase"
          />
          <ProjectCardCase
            gitRepo={github}
            worktype={code}
            designtype={behance}
            path={
              "https://www.behance.net/gallery/133984395/GoldYardRecord-Web-Design-Case-Study"
            }
            repolink={
              "https://github.com/Tetteh-Yaw-Precious/GoldYardRecordsUpgrade-master"
            }
            projectName="GoldYardRecords 2.0"
            projectCat="Music label Webapp (ux study)"
            techused="Figma | html | scss | Js "
          />
          <BrandIdentity
            designtype={behance}
            path={
              "https://www.behance.net/gallery/134010845/Seguah-Bookswap-Brand-style-guide?"
            }
            projectName="Seguah Bookswap"
            projectCat="Seguah Bookswap Brand design"
            techused="Figma | Ai | html | scss | Js "
          />

          <Comingsoon
            designtype={behance}
            projectName="Seguah Bookswap (webapp)"
            projectCat="A community of book lovers"
            techused="Coming Soon"
          />
          <Comingsoon
            designtype={behance}
            projectName="Mazaryn Social"
            projectCat="A decentralized social network"
            techused="Coming Soon"
          />
        </div>
      </motion.div>
    </StyledWork>
  );
};
const StyledWork = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media ${device.phone} {
    padding: 6% 0;
  }
  h4 {
    width: 5%;
    padding: 0 0 0 0;
  }
  h1 {
    margin-bottom: 1rem;
  }
  .projects {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30rem);
    grid-template-rows: repeat(2, 20rem);
    gap: 4rem;
    @media ${device.phone} {
      display: flex;
      flex-direction: column;
      div {
        width: 30rem;
      }
    }
  }
`;

export default Work;
