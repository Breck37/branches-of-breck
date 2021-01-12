import React from 'react'
import styles from '../styles/Home.module.css'
import { projectsData } from './api/projects';

const Projects = () => {
    return (
        <div>
            {projectsData.map((project) => (
                <div key={project.key} className={styles.links}>
                    <a rel="stylesheet" href={project.website} target="_blank">
                        <div className={styles.project}>
                            {project.name}
                            <img src={project.image} alt="breckulator project" />
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Projects;