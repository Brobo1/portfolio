import { Navbar } from "./Navbar.tsx";
import styles from "./Header.module.css";
import { Socials } from "./Socials.tsx";
import { awLink } from "./reuse/consts.tsx";

export function Header() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Arman Ahmadzadeh</h1>
        <p>Junior fullstack consultant at {awLink}</p>
        <Navbar />
      </div>

      <Socials />
    </div>
  );
}
