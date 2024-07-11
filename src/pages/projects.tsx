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
          Here are some of the projects that I have worked on (part-time) during
          my time as a developer.
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
