import { FC } from "react";
import { Title } from "../components/title";
import { PROJECTS } from "../data/project";
import { ProjectBox } from "../components/project-box";
import usePageLoad from "../hooks/usePageLoad";

const Projects: FC = () => {
  const loaded = usePageLoad();

  return (
    <section className="full projects">
      <div className="content-box">
        <Title>Projects</Title>
        <div className={`description ${loaded ? "loaded" : ""}`}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </div>
        {PROJECTS.map((project) => (
          <ProjectBox
            name={project.name}
            role={project.role}
            image={project.image}
            text={project.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
