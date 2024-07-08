import { FC } from "react";
import "../assets/timeline-box.css";

export interface TimelineBoxProps {
  period: string;
  position: string;
  companyName: string;
  companyLocation: string;
  text: any;
}

export const TimelineBox: FC<TimelineBoxProps> = ({
  period,
  position,
  companyName,
  companyLocation,
  text,
}) => {
  return (
    <div className="timeline-box">
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
