import React from "react";
import styled from "styled-components";
import { device } from "../helpers/Mixins";
import ProjectCard from "./ProjectCard";
import web_dev from "../images/web_dev.svg";
import github from "../images/githublogo.svg";
import design from "../images/design.svg";
import dribbble from "../images/dribbble.svg";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Pageanimation";

const Work = () => {
  return (
    <StyledWork>
      <motion.div
        className="workCt"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h4>Work</h4>
        <h1>a couple of my projects so far</h1>
        <div className="projects">
          <ProjectCard
            techtype={web_dev}
            worktype={github}
            projectName="GoldYardRecords 1.0"
            projectCat="Web development"
            techused="html | css"
          />
          <ProjectCard
            techtype={design}
            worktype={dribbble}
            projectName="veganChops Restaurant"
            projectCat="Branding | Brand Identity"
            techused="PSD | Ai"
          />
          <ProjectCard
            techtype={web_dev}
            worktype={github}
            projectName="School Registration System"
            projectCat="Web development"
            techused="html | scss | Javascript | Firebase"
          />
          <ProjectCard
            techtype={web_dev}
            worktype={github}
            projectName="Acquva Auctions"
            projectCat="Project Manager"
            techused="html | scss | Javascript | Firebase"
          />
          <ProjectCard
            techtype={web_dev}
            worktype={github}
            projectName="GoldYardRecords 2.0"
            projectCat="Web development"
            techused="html | scss | Javascript "
          />
          <ProjectCard
            techtype={design}
            worktype={dribbble}
            projectName="My Portfolio"
            projectCat="UI | UX Design"
            techused="ReactJs"
          />
        </div>
      </motion.div>
    </StyledWork>
  );
};
const StyledWork = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 1% 15%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
