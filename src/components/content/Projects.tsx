import styles from "./Projects.module.css";
import { PROJECTS } from "./ProjectData.tsx";

export type Project = {
  title: string;
  description: string;
  liveLink?: string;
  githubLink: string;
};

export function Projects() {
  return (
    <div id={"projects"}>
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          liveLink={project.liveLink || ""}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}

export function Project(props: {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}) {
  return (
    <div className={styles.projectContainer}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {
        <div>
          {props.liveLink ? (
            <button onClick={() => window.open(props.liveLink, "_blank")}>
              View live
            </button>
          ) : null}
          <button onClick={() => window.open(props.githubLink, "_blank")}>
            View on Github
          </button>
        </div>
      }
    </div>
  );
}
