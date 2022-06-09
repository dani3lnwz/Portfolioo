import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    focusOnSelect: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-4/5 x mx-auto mt-5 mb-0">
        {/* <h2> Single Item</h2>  */}
        <Slider {...settings}>
          <div>
            <img src={project.image} />
          </div>
          <div>
            <img src={project.img1} />
          </div>
          <div>
            <img src={project.img2} />
          </div>
          <div>
            <img src={project.img3} />
          </div>
        </Slider>
      </div>
      <div className="project -mt-24 mb-0">
        <h1> {project.name}</h1>
        {/* <img src={project.image} />  */}
        <p className="mx-10">
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
    </>
  );
}

export default ProjectDisplay;
