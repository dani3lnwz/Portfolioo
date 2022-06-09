import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p className="mt-4 mx-10">
        <b className="text-2xl">Description:</b>{" "}
        <span className="text-md">{project.desc}</span>
      </p>
      <p className="mt-4">
        <b className="text-2xl">Technology Used:</b>{" "}
        <span className="text-md">{project.tech}</span>
      </p>
      <br />
      <div>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-green-400 font-mono bg-gray-600 rounded p-2 mr-4"
        >
          Live Site
        </a>
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-violet-400 font-mono bg-gray-600 rounded p-2 mr-4"
        >
          Github Code
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
