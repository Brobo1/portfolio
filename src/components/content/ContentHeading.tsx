import styles from "./ContentHeading.module.css";
export function ContentHeading(props: { title: string }) {
  return (
    <>
      <h2 style={styles}>{props.title}</h2>
    </>
  );
}
