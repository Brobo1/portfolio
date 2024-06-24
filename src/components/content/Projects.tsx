import styles from "./Projects.module.css";
import { PROJECTS } from "./ProjectData.tsx";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@mui/material/Button";
import { Chip } from "@mui/material";

interface ProjectProps {
  title: string;
  description: string;
  projectLangs: string[];
  githubLink: string;
  liveLink: string;
  isDimmed: boolean;
}

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isProjectsHovered, setProjectsHovered] = useState(false);

  return (
    <motion.div
      className={styles.projects}
      onHoverStart={() => setProjectsHovered(true)}
      onHoverEnd={() => setProjectsHovered(false)}
    >
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          projectLangs={project.technologies}
          githubLink={project.githubLink}
          liveLink={project.liveLink || ""}
          isDimmed={isProjectsHovered && hoveredProject !== index}
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
        />
      ))}
    </motion.div>
  );
}

const Project: React.FC<
  ProjectProps & { onMouseEnter: () => void; onMouseLeave: () => void }
> = ({
  title,
  description,
  projectLangs,
  githubLink,
  liveLink,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
}) => {
  const animation = useAnimation();

  useEffect(() => {
    if (isDimmed) {
      animation.start({ opacity: 0.5, transition: { duration: 0.1 } });
    } else {
      animation.start({ opacity: 1, transition: { duration: 0.1 } });
    }
  }, [animation, isDimmed]);

  const sxStyle = {
    px: "5px",
    pt: "2px",
    pb: "1px",
    backgroundColor: "#292929",
    color: "#919191",
    "&:hover": {
      backgroundColor: "#949494",
      color: "#2a2a2a",
    },
  };

  return (
    <motion.div
      className={styles.projectContainer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      animate={animation}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.projectContainerActions}>
        <div className={styles.projectContainerLangs}>
          {projectLangs.map((projectLang) => (
            <Chip
              sx={{
                backgroundColor: "#424242",
                color: "#cccccc",
                mx: "1px",
              }}
              size={"small"}
              key={projectLang}
              label={projectLang}
              className={styles.chip}
            />
          ))}
        </div>
        <div className={styles.projectContainerButtons}>
          {liveLink ? (
            <Button
              sx={{ ...sxStyle, minWidth: "80px" }}
              size="small"
              variant="text"
              onClick={() => window.open(liveLink, "_blank")}
            >
              View live
            </Button>
          ) : null}
          <Button
            sx={{ ...sxStyle, minWidth: "120px" }}
            size="small"
            variant="text"
            onClick={() => window.open(githubLink, "_blank")}
          >
            View on Github
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
