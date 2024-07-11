import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../pages/router";

const Header: FC = () => {
  return (
    <header>
      <div className="left-side">
        <div className="box"></div>
        <Link to="/">
          <span className="name">Nikolay Zhekov</span>
          <span className="position"> / SOFTWARE ENGINEER</span>
        </Link>
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
