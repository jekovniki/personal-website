import { FC, useState } from "react";
import { Route } from "../interfaces/routes";
import { NavLink } from "react-router-dom";

export const MobileMenu: FC<{ routes: Route[] }> = ({ routes }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      <div
        className={`wrapper-menu ${open ? "open" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
      <nav className="mobile">
        <ul>
          {routes.map((route) => (
            <NavLink
              key={route.key}
              to={route.route}
              onClick={() => {
                setOpen(false);
              }}
            >
              {route.name.toUpperCase()}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};
