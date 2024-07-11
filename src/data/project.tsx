import { ProjectBoxProps } from "../interfaces/projects";
import commenterImage from "../assets/commenter.png";
import drupalImage from "../assets/drupal.jpg";

export const PROJECTS: ProjectBoxProps[] = [
  {
    name: "Commenter.ai",
    role: "Full-stack developer and architect",
    image: commenterImage,
    text: (
      <>
        <p>
          By customer request I build a full-stack app that implements the
          ChatGPT API to answer for comments on LinkedIn and etc.
        </p>
        <p>
          I used ReactJS for Front-end, NodeJS for backend and the database that
          I used is Firestore. It's hosted on AWS server.
        </p>
      </>
    ),
  },
  {
    name: "Camera widget",
    role: "Main developer",
    image: drupalImage,
    text: (
      <>
        <p>
          By customer request I build a custom plugin for Drupal 9, using PHP
          and Javascript.
        </p>
        <p>
          The plugin implements the WebRTC capturing in order to capture an
          image from the admin's phone and directly upload it to the website.
        </p>
        <p>
          <a
            href="https://github.com/jekovniki/camera_widget"
            target="_blank"
            className="colored-link"
          >
            See project
          </a>
        </p>
      </>
    ),
  },
];
