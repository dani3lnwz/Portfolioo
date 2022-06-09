import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
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
      <h1 className="text-semibold mt-4 text-violet-600"> {name} </h1>
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-md text-md"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
