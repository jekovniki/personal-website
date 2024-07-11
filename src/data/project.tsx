import { ProjectBoxProps } from "../components/project-box";
import commenterImage from "../assets/commenter.png";
import drupalImage from "../assets/drupal.jpg";

export const PROJECTS: ProjectBoxProps[] = [
  {
    name: "Commenter.ai",
    role: "Full-stack developer and architect",
    image: commenterImage,
    text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    name: "Camera widget",
    role: "Main developer",
    image: drupalImage,
    text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
  },
];
