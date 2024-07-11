import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../pages/router";
import useWindowWidth from "../hooks/useWindowWidth";
import { MobileMenu } from "../components/mobile-menu";

const Header: FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <header>
      <div className="left-side">
        <div className="box"></div>
        <Link to="/">
          <span className="name">Nikolay Zhekov</span>
          <span className="position">
            {" "}
            <span className="slash">/</span> SOFTWARE ENGINEER
          </span>
        </Link>
      </div>
      {windowWidth > 767 ? (
        <nav>
          <ul>
            {routes.map((route) => (
              <NavLink key={route.key} to={route.route}>
                {route.name.toUpperCase()}
              </NavLink>
            ))}
          </ul>
        </nav>
      ) : (
        <MobileMenu routes={routes} />
      )}
    </header>
  );
};

export default Header;
