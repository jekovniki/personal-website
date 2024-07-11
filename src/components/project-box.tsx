import { FC } from "react";
import "../assets/project-box.css";
import usePageLoad from "../hooks/usePageLoad";
import { ProjectBoxProps } from "../interfaces/projects";

export const ProjectBox: FC<ProjectBoxProps> = ({
  name,
  role,
  text,
  image,
}) => {
  const loaded = usePageLoad();

  return (
    <div className={`project-box ${loaded ? "loaded" : ""}`}>
      <div className="content">
        <div className="heading">
          <div className="side-line"></div>
          <div className="titles">
            <h2>{name}</h2>
            <h3>{role}</h3>
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
      <img src={image} alt={`${name} | ${role}`} title={`${name} | ${role}`} />
    </div>
  );
};
