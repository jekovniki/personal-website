import { NavLink } from "react-router-dom";
import { routes } from "../pages/router";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <div className="box"></div>
        <a href="/">
          <span className="name">Nikolay Zhekov</span>
          <span className="position"> / SOFTWARE ENGINEER</span>
        </a>
      </div>
      <nav>
        <ul>
          {routes.map((route) => (
            <NavLink key={route.key} to={route.route}>
              {route.name.toUpperCase()}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
