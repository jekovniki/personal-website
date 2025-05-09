import { FC } from "react";
import { TimelineBox } from "../components/timeline-box";
import { Title } from "../components/title";
import { EXPERIENCE } from "../data/resume";

const Resume: FC = () => {
  return (
    <section className="full">
      <div className="content-box">
        <Title>Resume</Title>
        <div className="resume">
          {EXPERIENCE.map((job, id) => (
            <TimelineBox
              key={id}
              period={job.period}
              position={job.position}
              companyLocation={job.companyLocation}
              companyName={job.companyName}
              text={job.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
