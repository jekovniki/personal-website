import { ReactNode, FC } from "react";
import "../assets/title.css";

export const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="title-wrapper">
      <div className="box"></div>
      <h1>{children}</h1>
    </div>
  );
};
