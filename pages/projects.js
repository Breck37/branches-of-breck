import React from "react";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { projectsData } from "./api/projects";

const Projects = () => {
  return (
    <ProjectWrap>
      {projectsData.map((project) => (
        <ProjectCard key={project.key} imageWidth={project.imageWidth}>
          <a rel="stylesheet" href={project.website} target="_blank">
            <div className={styles.project}>
              {project.name}
              <img src={project.image} alt={project.alt} />
            </div>
            <div>
                {project.tagline}
            </div>
          </a>
        </ProjectCard>
      ))}
    </ProjectWrap>
  );
};

export default Projects;

const ProjectWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const ProjectCard = styled.div`
  margin-top: 24px;
  text-align: center;

  > a > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        height: 200px;
        width: ${({ imageWidth }) => imageWidth ?? 150}px;
        margin-top: 16px;
    }
  }

  > a div:last-child {
      margin: auto;
      margin-top: 16px;
      max-width: 40%;
  }
`;
