import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";
import "../styles/Footer.css";
import Footer from "../components/Footer";


function Projects() {
  return (
    <>
      <div className="projects">
        <h1 className="text-4xl text-blue-900 font-semibold mt-2 font-sans">
          {" "}
          My Personal Projects
        </h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                id={idx}
                name={project.name}
                image={project.image}
                details={project.details}
              />
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
