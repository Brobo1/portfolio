import styles from "./About.module.css";
import { awLink } from "../reuse/consts.tsx";

// const getAge = (birthdate: string) => {
//   const today = new Date();
//   const birthDate = new Date(birthdate);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// };

export function About() {
  // let age = getAge("1995-02-16");

  return (
    <div id={"about"} className={styles.about}>
      <p>
        For as long as I can remember I always had an interest in electronics
        and tech. I used to disassemble my toys to get the components and make
        new things. My curiosity grew and I took a bachelors degree in IT and
        Information systems. Unfortunately I graduated right as covid lockdowns
        started and I struggled to find work. <br /> <br />
        After covid restrictions were lifted I found a consulting company called
        {awLink} that offered a bootcamp which i decided to take. I am now
        working as a consultant at said company and am looking for projects.
        <br /> <br />
        In my free time I like to produce music, tinkering with electronics and
        hang out with friends and family.
      </p>
    </div>
  );
}
