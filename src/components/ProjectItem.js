import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id, details }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage w-100"
      />
      <h1 className="text-semibold text-3xl font-serif mt-4 text-blue-600"> {name} </h1>
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-lg"
        >
          Details
        </button>
      </div>
      <div>
        <h2 className="text-green-700 font-semibold font-sans">{details}</h2>
      </div>
    </div>
  );
}

export default ProjectItem;
