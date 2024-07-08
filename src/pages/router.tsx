import AboutMe from "./about-me";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

interface Route {
  name: string;
  key: string;
  route: string;
  element: any;
}

export const routes: Route[] = [
  {
    name: "About me",
    key: "about-me",
    route: "/",
    element: <AboutMe />,
  },
  {
    name: "Resume",
    key: "resume",
    route: "/resume",
    element: <Resume />,
  },
  {
    name: "Projects",
    key: "projects",
    route: "/projects",
    element: <Projects />,
  },
  {
    name: "Contact",
    key: "contact",
    route: "/contact",
    element: <Contact />,
  },
];
