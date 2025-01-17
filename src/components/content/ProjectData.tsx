export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "File uploader/Cloud storage",
    description: "Website that allows users to upload files and create folders. ",
    technologies: ["JavaScript", "EJS", "Express", "Passport", "Multer", "Prisma", "Supabase", "TailwindCSS", "PostgreSQL"],
    githubLink: "https://github.com/Brobo1/file-uploader",
    liveLink: "https://file-uploader.up.railway.app/",
  },
  {
    title: "Memory game",
    description:
      "This is a memory game where to objective is to avoid clicking the same card twice. The images are fetched from pokeapi.",
    technologies: ["React, JavaScript"],
    githubLink: "https://github.com/Brobo1/memory-card-game",
    liveLink: "https://brobo1.github.io/memory-card-game/",
  },
  {
    title: "Battleship (WIP)",
    description: "The game Battleship made in JavaScript.",
    technologies: ["JavaScript"],
    githubLink: "https://github.com/Brobo1/battleship",
    liveLink: "https://brobo1.github.io/battleship/",
  },
  {
    title: "Binary search tree",
    description: "A binary search tree made following the odin project.",
    technologies: ["JavaScript"],
    githubLink:
      "https://github.com/Brobo1/OdinProject/tree/master/full-stack-js/javascript/projects/data-structures/binary-search-tree",
  },
  {
    title: "Tic-tac-toe",
    description:
      "Tic-tac-toe game made from scratch following The Odin Project.",
    technologies: ["JavaScript", "HTML/CSS"],
    githubLink:
      "https://github.com/Brobo1/OdinProject/tree/master/full-stack-js/javascript/projects/tic-tac-toe",
    liveLink:
      "https://brobo1.github.io/OdinProject/full-stack-js/javascript/projects/tic-tac-toe/",
  },
  {
    title: "Etch-a-Sketch",
    description:
      "This is a panting app made following the Odin Project course.",
    technologies: ["JavaScript", "HTML/CSS"],
    githubLink:
      "https://github.com/Brobo1/OdinProject/tree/master/foundations/projects/etch-a-sketch",
    liveLink:
      "https://brobo1.github.io/OdinProject/foundations/projects/etch-a-sketch/",
  },
  {
    title: "FoodFood Frontend",
    description:
      "FoodFood is a food delivery app done as part of a coding challenge after my .NET bootcamp was completed.",
    technologies: ["TypeScript", "React", "Tailwind", "Redux", "ant.design"],
    githubLink: "https://github.com/AgustinaScapusio/FoodFoodApp",
  },
  {
    title: "FoodFood Backend",
    description:
      "FoodFood is a food delivery app done as part of a coding challenge after my .NET bootcamp was completed.",
    technologies: ["C#", "ASP.NET", "EF Core", "SQLite", "MSSQL", "Azure"],
    githubLink: "https://github.com/Brobo1/FoodFoodAPI",
  },
  {
    title: "Borro Backend",
    description:
      "Borro is a website that was developed as a major project before graduation. It showcases a variety of skills including front-end development, back-end integration, and user experience design. The project was a success and received positive feedback from users and peers alike.",
    technologies: ["C#", "ASP.NET", ".Net", "Azure", "SQL"],
    githubLink: "https://github.com/Brobo1/BorroAPI",
  },
  {
    title: "Borro Frontend",
    description: "Frontend for the Borro project.",
    technologies: ["React", "Typescript", "Google maps API", "MUI"],
    githubLink: "https://github.com/Sasibru/borro-react-app",
    liveLink: "https://github.com/Sasibru/borro-react-app",
  },
  {
    title: "TicTacToe",
    description:
      "Simple game of tic tac toe made with React. It was a fun project to make and helped me understand the basics of React.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/07-tic-tac-toe-starting-project",
    liveLink: "https://armandotictactoe.vercel.app/",
  },
  {
    title: "Interval Game",
    description:
      "A small challenge type game made to test the user's reaction time. It was a fun project to make and helped me understand the basics of JavaScript.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/the-almost-final-countdown",
    liveLink: "https://the-almost-final-countdown.vercel.app/",
  },
  {
    title: "Meetup app",
    description:
      "A simple app that allows users to create and join meetups. It was a fun project to make and helped me understand the basics of React.",
    technologies: ["React", "JavaScript", "MongoDB"],
    githubLink: "https://github.com/Brobo1/next-js-meetup-app",
    liveLink: "https://next-js-meetup-app-navy.vercel.app/",
  },
  {
    title: "Quiz app",
    description:
      "A simple quiz app that allows users to take a quiz and see their react skills. When the quiz ends users get a page that shows their score. It was a fun project to make and helped me understand the basics of React.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/quiz-app/",
    liveLink: "https://quiz-game-lemon-three.vercel.app/",
  },
  {
    title: "Code Challenge backend",
    description:
      "Code challenge from my job where we were supposed to implement a backend for a website. The database tracks users, orders products and wishlists. CRUD operations for all entities.",
    technologies: ["C#", "ASP.NET"],
    githubLink: "https://github.com/Brobo1/CodeChallenge",
    liveLink: "",
  },
  {
    title: "Investment Calculator",
    description:
      "An investment calculator that allows users to calculate their investment returns. Updates in real time and displays a table based on duration.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/investment-calc-v2",
    liveLink: "https://investment-calc-zeta.vercel.app/",
  },
  {
    title: "Fractal tree",
    description:
      "A simple fractal tree made with recursion in JavasScript. A work in progress that i plan on expanding to allow users to interact with the tree.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/fractal-tree",
    liveLink: "https://fractal-tree-swart.vercel.app/",
  },
  {
    title: "Project Management app",
    description:
      "Project management app that allows users to create projects and add tasks to them.",
    technologies: ["React", "JavaScript"],
    githubLink: "https://github.com/Brobo1/project-management-app-follow-along",
    liveLink: "https://project-management-app-three-sigma.vercel.app/",
  },
  {
    title: "Food Order app",
    description:
      "An app that simulates a food ordering app. It fetches data from a node backend and allows users to add items to the cart.",
    technologies: ["Next.js", "JavaScript", "Node.js"],
    githubLink: "https://github.com/Brobo1/next-js-food-app",
    liveLink: "",
  },
];
