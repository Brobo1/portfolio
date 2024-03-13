import styles from "./Home.module.css";
import { Header } from "./Header.tsx";
import { Content } from "./content/Content.tsx";

export function Home() {
  return (
    <div className={styles.div}>
      <Header />

      <Content />
    </div>
  );
}
