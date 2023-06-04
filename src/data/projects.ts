import { Project } from "@/types/project";

export const projectList: Project[] = [
  {
    id: 0,
    title: "Clone of classic game 2048",
    description:
      "Clone the PC version of classic game 2048 with HTML, CSS and Vanilla Javascript. Use arrow keys on your keyboard to join the numbers and get 2048 to win.",
    demoSrc: "/prj-photos/2048-clone.png",
    github: ["https://github.com/duongtuanh0307/make-a-copy-of-2048"],
    deployment: "https://2048-anhdt.netlify.app/",
    techStack: ["Vanilla Javascript", "HTML", "CSS"],
  },
  {
    id: 1,
    title: "Fish Info",
    description:
      "A light try of Framer motion. No-backend app created with create-react-app and static mock data.",
    demoSrc: "/prj-photos/fish-info.png",
    github: ["https://github.com/duongtuanh0307/fishes-info"],
    deployment: "https://happy-stonebraker-53b746.netlify.app/",
    techStack: ["Typesript", "React", "Framer motion", "Emotion"],
  },
  {
    id: 2,
    title: "Simple Chat App",
    description:
      "Simple React Chat App using GraphQL server with firebase authentication.",
    demoSrc: "/prj-photos/react-chat-app.png",
    github: ["https://github.com/duongtuanh0307/my-chat-app/tree/master"],
    deployment: "https://my-first-typescript-app-bdhf89smr.vercel.app/login",
    techStack: [
      "Typesript",
      "React",
      "GraphQl",
      "Apollo client",
      "Firebase Authentication",
    ],
  },
  {
    id: 3,
    title: "Fullstack Photo Share app",
    description:
      "A clone of Pinterest: Fullstack REST API app with JWT Authentication. The animation effects added using React Spring",
    demoSrc: "/prj-photos/pinterest-clone.png",
    github: [
      "https://github.com/duongtuanh0307/photo-share-client",
      " https://github.com/duongtuanh0307/photo-share-server",
    ],
    deployment: "",
    techStack: [
      "Typesript",
      "React",
      "Emotion",
      "Material-UI",
      "ExpressJs",
      "PostgreSQL",
      "jsonwebtoken",
    ],
  },
  {
    id: 4,
    title: "Online store insprired by my favorite cartoon",
    description:
      "Online store with items from the cartoon named The Amazing World of Gumball. Stock and purchase data manage by CommerceJs",
    demoSrc: "/prj-photos/awesome-store.png",
    github: ["https://github.com/duongtuanh0307/amazing-store"],
    deployment: "https://the-awesome-store.vercel.app/",
    techStack: ["Typesript", "NextJs", "Formik", "CommerceJs"],
  },
  {
    id: 5,
    title: "To Do List App",
    description:
      "Simple Fullstak To Do List App. Login with OTP (send via email). Help managing To Do list. Daily reminder function is also added.",
    demoSrc: "/prj-photos/todo-app.png",
    github: [
      "https://github.com/duongtuanh0307/todo-app-client",
      "https://github.com/duongtuanh0307/todo-app-api",
    ],
    deployment: "",
    techStack: [
      "Typesript",
      "React",
      "Vanilla Extract",
      "HappiJs",
      "Prisma",
      "PostgreSQL",
      "Sengrid/mail",
      "jsonwebtoken",
    ],
  },
];
