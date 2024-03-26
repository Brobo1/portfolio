import styles from "./Home.module.css";
import { Header } from "./Header.tsx";
import { Content } from "./content/Content.tsx";
import { ScrollButton } from "./ScrollButton.tsx";

export function Home() {
  return (
    <div>
      <div className={styles.div}>
        <Header />
        <Content />
      </div>
      <ScrollButton />
    </div>
  );
}
