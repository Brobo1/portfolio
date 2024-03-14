import { css } from "@emotion/css";

const styles = css`
  font-weight: 300;
  color: rgba(5, 212, 142, 0.56);
  &:hover {
    color: #05d48e;
  }
`;

export const awLink = (
  <a
    className={styles}
    onClick={() => window.open("https://www.academicwork.no/", "_blank")}
  >
    {" "}
    Academic Work{" "}
  </a>
);
