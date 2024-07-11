import { FC } from "react";
import "../assets/timeline-box.css";
import usePageLoad from "../hooks/usePageLoad";
import { TimelineBoxProps } from "../interfaces/resume";

export const TimelineBox: FC<TimelineBoxProps> = ({
  period,
  position,
  companyName,
  companyLocation,
  text,
}) => {
  const loaded = usePageLoad();

  return (
    <div className={`timeline-box ${loaded ? "loaded" : ""}`}>
      <div className="timeline-main">
        <h4>{period}</h4>
        <h3>{position}</h3>
        <h5>{companyName}</h5>
        <h6>{companyLocation}</h6>
      </div>
      <div>{text}</div>
    </div>
  );
};
