import { Navbar } from "./Navbar.tsx";
import styles from "./Header.module.css";
import { Socials } from "./Socials.tsx";

export function Header() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Arman Ahmadzadeh</h1>
        <p>Junior fullstack consultant</p>
        <Navbar />
      </div>

      <Socials />
    </div>
  );
}
