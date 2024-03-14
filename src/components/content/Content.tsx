import styles from "./Content.module.css";
import { Projects } from "./Projects.tsx";
import { About } from "./About.tsx";
import { ContentHeading } from "./ContentHeading.tsx";

export function Content() {
  return (
    <main className={styles.main}>
      <div id={"about"}>
        <ContentHeading title={"about"} />
        <About />
      </div>
      <div id={"projects"} className={styles.projects}>
        <ContentHeading title={"projects"} />
        <Projects />
      </div>
    </main>
  );
}
