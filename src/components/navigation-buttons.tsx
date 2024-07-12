import { Link } from "react-router-dom";
import { Route } from "../interfaces/routes";
import { FC } from "react";

export const NavigationButtons: FC<{ routes: Route[] }> = ({ routes }) => {
  const resumeRoute = routes.find((route) => route.key === "resume");
  const projectsRoute = routes.find((route) => route.key === "projects");

  return (
    <div className="buttons">
      <Link to={resumeRoute?.route || "/"} className="button primary">
        {resumeRoute?.name}
      </Link>
      <Link to={projectsRoute?.route || "/"} className="button secondary">
        {projectsRoute?.name}
      </Link>
    </div>
  );
};
