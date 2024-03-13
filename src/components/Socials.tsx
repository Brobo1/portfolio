import styles from "./Socials.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";

export function Socials() {
  return (
    <ul className={styles.ul}>
      <SocialsIcon>
        <GitHubIcon
          onClick={() => window.open("https://github.com/Brobo1", "_blank")}
        />
      </SocialsIcon>
      <SocialsIcon>
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/arman-ahmadzadeh-892310241/",
              "_blank",
            )
          }
        />
      </SocialsIcon>
      <SocialsIcon>
        <EmailIcon
          onClick={() => window.open("mailto:armanahz95@gmail.com", "_blank")}
        />
      </SocialsIcon>
    </ul>
  );
}

function SocialsIcon(props: { children: ReactNode }) {
  const controls = useAnimation();

  function startHover() {
    const range = 25;
    const rand: number = Math.floor(Math.random() * range) - range / 2;
    controls.start({
      scale: 1.2,
      rotate: rand,
      opacity: 1,
    });
  }

  function endHover() {
    controls.start({
      scale: 1,
      rotate: 0,
      opacity: 0.6,
    });
  }

  return (
    <motion.li
      onHoverStart={startHover}
      initial={{
        opacity: 0.6,
      }}
      onHoverEnd={endHover}
      animate={controls}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      {props.children}
    </motion.li>
  );
}
