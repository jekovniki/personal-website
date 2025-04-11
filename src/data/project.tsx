import { ProjectBoxProps } from "../interfaces/projects";
import commenterImage from "../assets/commenter.png";
import drupalImage from "../assets/drupal.jpg";
import ofertiraiMeImage from "../assets/ofertirai-me.jpg";

export const PROJECTS: ProjectBoxProps[] = [
  {
    name: "Ofertirai.me",
    role: "Front-end developer",
    image: ofertiraiMeImage,
    customCss: "image-contain",
    text: (
      <>
        <p>Building the front-end part of the application using Next.js.</p>
        <p>
          Frontend: <strong>ReactJS</strong> (NextJS),{" "}
          <strong>Tailwind CSS</strong>, <strong>ReactQuery</strong>.
        </p>
        <p>
          <a
            href="https://ofertirai.me/"
            target="_blank"
            className="colored-link"
          >
            See project
          </a>
        </p>
      </>
    ),
  },
  {
    name: "Commenter.ai",
    role: "Full-stack developer and architect",
    image: commenterImage,
    text: (
      <>
        <p>
          Building a full-stack app that implements the ChatGPT API to answer
          for comments on LinkedIn, Facebook and etc.
        </p>
        <p>
          Frontend: <strong>ReactJS</strong> (vite)
          <br />
          Backend: <strong>NodeJS</strong> with Express,{" "}
          <strong>ChatGPT API</strong>, <strong>Stripe</strong> implementation
          for payments. Hosted on <strong>AWS</strong>
        </p>
        <p>
          <a
            href="https://commenter.ai/"
            target="_blank"
            className="colored-link"
          >
            See project
          </a>
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
          <strong>Drupal 9</strong> plugin build with <strong>PHP</strong> and{" "}
          <strong>Javascript</strong>.
        </p>
        <p>
          The plugin implements the <strong>WebRTC API</strong> in order to
          capture an image from the admin's phone and directly upload it to the
          admin dashboard.
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
