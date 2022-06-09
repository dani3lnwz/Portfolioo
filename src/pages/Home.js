import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { HiArrowNarrowRight } from "react-icons/hi";
import "../styles/Home.css";
import Contact from "./Contact";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute", 
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "80vw", 
    textAlign: "center",
    zIndex: 1,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="home">
        <Box className={classes.typedContainer}>
          <Typography className={classes.title} variant="h2">
            <Typed className="font-serif" strings={["Hi, Myself Mehedi Hassan"]} typeSpeed={40} />
          </Typography>

          <Typography className={classes.subtitle} variant="h5">
            <Typed
              strings={["Web Developer", "React Developer", "MERN Development"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
        </Box>
        <div className="about">
          <h2 className="mb-16"></h2>
          <div className="prompt md:mt-8">
            <p></p>
            <a
              href="https://www.linkedin.com/in/hassanmehedi1/"
              target="_blank"
            >
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
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-fuchsia-500 hover:border-fuchsia-500 rounded-lg">
              Get Resume
              <span className="group-hover:ml-4 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </a>
        </div>
        <div className="skills bg-gray-900">
          <h1 className="title-font  mb-4 text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl mt-4">
            Skills
          </h1>
          <ol className="list">
            <li className="item text-center">
              <h2 className=""> Front-End</h2>
              <span>
                React.js, JavaScript, HTML-5, CSS-3, Bootstrap, TailwindCSS,
                SASS, Firebase, DaisyUI, React- Router, Axios, React-Query
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
    </>
  );
}

export default Home;
