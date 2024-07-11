import { FC } from "react";
import usePageLoad from "../hooks/usePageLoad";
import { TimelineBoxProps } from "../interfaces/resume";
import useWindowWidth from "../hooks/useWindowWidth";

export const TimelineBox: FC<TimelineBoxProps> = ({
  period,
  position,
  companyName,
  companyLocation,
  text,
}) => {
  const loaded = usePageLoad();
  const windowWidth = useWindowWidth();

  return (
    <div className={`timeline-box ${loaded ? "loaded" : ""}`}>
      <div className="timeline-main">
        <h4>{period}</h4>
        <h3>{position}</h3>
        <h5>{companyName}</h5>
        <h6>{companyLocation}</h6>
      </div>
      {windowWidth < 768 && <div className="line-blue"></div>}
      <div>{text}</div>
    </div>
  );
};
