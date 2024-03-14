import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks: { page: string; link: string }[] = [
  { page: "about", link: "about" },
  { page: "projects", link: "projects" },
];

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((link) => (
          <NavbarItem key={link.link} text={link.page} />
        ))}
      </ul>
    </nav>
  );
}

function NavbarItem(props: { text: string }) {
  const controls = useAnimation();
  const liControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const navSelector = 40;

  const startHover = () => {
    setIsHovered(true);
  };

  const endHover = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered || isActive) {
      controls.start({
        width: `${navSelector * 2}px`,
      });
      liControls.start({
        opacity: 1,
      });
    } else {
      controls.start({
        width: `${navSelector}px`,
      });
      liControls.start({
        opacity: 0.6,
      });
    }
  }, [isHovered, isActive, controls, liControls]);

  return (
    <Link
      className={styles.Link}
      to={props.text}
      spy={true}
      smooth={true}
      offset={-10}
      duration={150}
      onMouseOver={startHover}
      onMouseOut={endHover}
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
    >
      <motion.li
        animate={liControls}
        className={styles.div}
        initial={{
          opacity: 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
      >
        <motion.span
          animate={controls}
          initial={{
            width: `${navSelector}px`,
          }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 50,
          }}
          className={styles.line}
        />
        {props.text}
      </motion.li>
    </Link>
  );
}
