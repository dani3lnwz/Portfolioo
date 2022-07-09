import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Footer.css";
import Footer from "../components/Footer";


function Experience() {
  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 container px-16 mx-auto">
        <div className="font-mono text-3xl font-semibold mt-20">
          <h1 className="text-6xl text-violet-500">Mehedi Hassan</h1>
          <h2 className="text-green-400">Web Developer</h2>
          <br />
          <p className="text-base font-sans">
            Passionate and Enthusiastic Web Developer. Proficient with CSS and
            JS Frameworks, with extensive knowledge of UX and user psychology.
            Primarily focus on developing Front-End interface components and
            implementing them following well-known workflows. Ensuring the
            application is robust and easy to maintain. Extensive experience in
            developing web applications using HTML/HTML5, CSS/CSS3, SASS,
            Daisy UI, API, JavaScript, Stripe, React JS, React-Router, JSON,
            Bootstrap and Tailwind-CSS.
          </p>
        </div>
        <div>
          <img
            className="w-96 mt-10 sm:ml-0 md:ml-32"
            src="https://i.ibb.co/yqbdtmX/my-pp1-1.png"
            alt=""
          />
        </div>
      </section>
      <div className="text-center mb-14 before:block before:w-72 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:dark:bg-violet-400 mt-10">
        <h3 className="text-3xl font-semibold text-green-500">
          Educational Background & Experience
        </h3>
      </div>
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
            <p className="text-align: justify">
              I had 4 months of internship at American International
              University-Bangladesh. I was assigned as Teaching Assistant under
              my respected faculty Fahmida Alam. I learned a lot during my
              internship period. I assisted and helped 80+ students with
              coding-related problems. I gained management skills during this
              internship because I had to manage the students in two sections.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Experience;
