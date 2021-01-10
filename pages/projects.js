import React from 'react'
import styles from '../styles/Home.module.css'

const Projects = () => {
    return (
        <div>
            <div className={styles.links}>
                <a rel="stylesheet" href="https://breckulator.com">
                    <div className={styles.project}>
                        Breckulator
              <img src="/breckulator.png" alt="breckulator project" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;