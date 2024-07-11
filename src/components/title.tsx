import { ReactNode, FC } from "react";
import "../assets/title.css";
import usePageLoad from "../hooks/usePageLoad";

export const Title: FC<{ children: ReactNode }> = ({ children }) => {
  const loaded = usePageLoad();
  return (
    <div className={`title-wrapper ${loaded ? "loaded" : ""}`}>
      <div className="box"></div>
      <h1>{children}</h1>
    </div>
  );
};
