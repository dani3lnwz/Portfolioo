import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../styles/Home.css";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="mb-16"> Hi, My Name is Mehedi Hassan</h2>
        <div className="prompt">
          <p>
            I am an enthusiastic web developer who is able to realize projects
            from ground up.
          </p>
          <a href="https://www.linkedin.com/in/hassanmehedi1/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="mailto:mehedihypernova@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/hassanmehedi1" target="_blank">
            <GithubIcon />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1iboKhBx2yZ-P8LkzGCOBnp73sli1CoD_/view?usp=sharing"
          target="_blank"
        >
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-fuchsia-500 hover:border-fuchsia-500 ">
            Get Resume
            <span className="group-hover:ml-4 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </a>
      </div>
      <div className="skills">
        <h1 className="text-6xl mt-4 mb-4">TECHNOLOGY/SKILLS</h1>
        <ol className="list">
          <li className="item text-center">
            <h2 className=""> Front-End</h2>
            <span>
              React.js, JavaScript, HTML-5, CSS-3, Bootstrap, TailwindCSS, SASS,
              Firebase, DaisyUI, React- Router, Axios, React-Query
            </span>
          </li>
          <li className="item text-center">
            <h2>Back-End</h2>
            <span>Node.js, Express.js, MongoDB, MySql</span>
          </li>
          <li className="item text-center">
            <h2>Familiar</h2>
            <span>
              C++, Java, C#,Next.Js, TypeScript, GraphQL, Jest, Agile, Scrum,
              Redux, php, Linux
            </span>
          </li>
          <li className="item text-center">
            <h2>Tools/Others:</h2>
            <span>
              Git, GitHub, Stripe, Netlify, npm, Heroku, JWT, VS Code, Sublime
              Text, Chrome Dev Tool, Figma, Vite, Canva
            </span>
          </li>
        </ol>
      </div>
      <Contact></Contact>
    </div>
  );
}

export default Home;
