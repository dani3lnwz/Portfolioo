import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience font-semibold">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Holy flower Model College
          </h3>
          <p> High Secondary Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            American International University- Bangladesh
          </h3>

          <p className="vertical-timeline-element-subtitle">
            Bachelor of Science Degree
          </p>

          <p> Computer Science and Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="01/2022 - 04/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Teaching Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            American International University- Bangladesh
          </h4>
          <p>
            I had 4 months of internship at American International
            University-Bangladesh. I was assigned as Teaching Assistant under my
            respected faculty Fahmida Alam. I learned a lot during my internship
            period. I assisted and helped 80+ students with coding-related
            problems. I gained management skills during this internship because
            I had to manage the students in two sections.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
