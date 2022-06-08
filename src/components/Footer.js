import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/hassanmehedi1" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/hassanmehedi1/" target="_blank">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Mehedi-Hassan</p>
    </div>
  );
}

export default Footer;
