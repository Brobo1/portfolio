import styles from "./Content.module.css";
import { Projects } from "./Projects.tsx";
import { About } from "./About.tsx";

export function Content() {
  return (
    <main className={styles.main}>
      <About />
      <Projects />
    </main>
  );
}
