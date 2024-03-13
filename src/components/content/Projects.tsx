import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
};

const PROJECTS: Project[] = [
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
  {
    title: "Borro",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
  },
];

export function Projects() {
  return (
    <div id={"projects"}>
      {PROJECTS.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export function Project(props: { title: string; description: string }) {
  return (
    <div className={styles.projectContainer}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
