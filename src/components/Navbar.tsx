import styles from "./Navbar.module.css";
import { motion, useAnimation } from "framer-motion";

const navLinks: { page: string; link: string }[] = [
  { page: "about", link: "/#about" },
  { page: "projects", link: "/#projects" },
];

export function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          {navLinks.map((link) => (
            <>
              <NavbarItem key={link.link} text={link.page} />
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}

function NavbarItem(props: { text: string }) {
  const controls = useAnimation();
  const navSelector = 40;

  function startHover() {
    controls.start({
      width: `${navSelector * 2}px`,
    });
  }

  function endHover() {
    controls.start({
      width: `${navSelector}px`,
    });
  }

  return (
    <motion.li
      className={styles.div}
      initial={{
        opacity: 0.6,
      }}
      whileHover={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      onHoverStart={startHover}
      onHoverEnd={endHover}
    >
      <motion.span
        animate={controls}
        initial={{
          width: `${navSelector}px`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        className={styles.line}
      />
      {props.text}
    </motion.li>
  );
}
