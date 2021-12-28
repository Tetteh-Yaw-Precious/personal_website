import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../animations/Pageanimation";
const ProjectCardCase = ({
  techtype,
  worktype,
  projectName,
  projectCat,
  techused,
  designtype,
  path,
  repolink,
  gitRepo,
}) => {
  return (
    <StyledProjectCard variants={titleAnim}>
      <motion.div className="sociallinks" variants={titleAnim}>
        <a href={null} target="_blank" rel="noreferrer">
          <img src={worktype} alt="type of work" />
        </a>
        <a href={repolink} target="_blank" rel="noreferrer">
          <img src={gitRepo} alt="github profile" />
        </a>

        <a href={path} target="_blank" rel="noreferrer">
          <img src={designtype} alt="case study" />
        </a>
      </motion.div>
      <div className="cardInfo">
        <h2>{projectName}</h2>
        <h3>{projectCat}</h3>
      </div>
      <div className="techused">
        <div className="techcontainer">
          <div className="circle"></div>
          <p>{techused}</p>
        </div>
      </div>
    </StyledProjectCard>
  );
};
const StyledProjectCard = styled(motion.div)`
  border: 1px solid black;
  padding: 4rem 1rem 3rem 3rem;
  display: flex;
  flex-direction: column;

  .sociallinks {
    display: flex;
    gap: 1rem;
    padding: 0 0 2rem 0;

    a {
      img {
        width: 90%;
        cursor: pointer;
      }
    }
  }
  .cardInfo {
    min-height: 60%;
  }
  .techcontainer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .techused {
    align-items: flex-end;
    width: 100%;

    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50rem;
      background-color: #1b1e32;
    }
    display: flex;
  }
`;
export default ProjectCardCase;
