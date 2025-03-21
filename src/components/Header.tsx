import { Navbar } from "./Navbar.tsx";
import styles from "./Header.module.css";
import { Socials } from "./Socials.tsx";

export function Header() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Arman Berg</h1>
        <p>Junior fullstack developer</p>
        <Navbar />
      </div>

      <Socials />
    </div>
  );
}
