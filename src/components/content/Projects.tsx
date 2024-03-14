import styles from "./Projects.module.css";
import { PROJECTS } from "./ProjectData.tsx";

export function Projects() {
  return (
    <div className={styles.projects} id={"projects"}>
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          projectLangs={project.technologies}
          githubLink={project.githubLink}
          liveLink={project.liveLink || ""}
        />
      ))}
    </div>
  );
}

export function Project(props: {
  title: string;
  description: string;
  projectLangs: string[];
  githubLink: string;
  liveLink: string;
}) {
  return (
    <div className={styles.projectContainer}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {
        <div className={styles.projectContainerActions}>
          <div className={styles.projectContainerLangs}>
            {props.projectLangs.map((projectLang) => (
              <p>{projectLang}</p>
            ))}
          </div>
          <div className={styles.projectContainerButtons}>
            {props.liveLink ? (
              <button onClick={() => window.open(props.liveLink, "_blank")}>
                View live
              </button>
            ) : null}
            <button onClick={() => window.open(props.githubLink, "_blank")}>
              View on Github
            </button>
          </div>
        </div>
      }
    </div>
  );
}
