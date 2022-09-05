import React from "react";
import "./Footer.css";
// import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-content">
        <h3>Muhammad Shah Zaib Web Developer</h3>
        <p>
          Muhammad Shah Zaib is a front-end web developer with a solid
          background in JavaScript frameworks like ReactJS.
          {/* <SiInstagram />  */}
        </p>
        <ul class="socials">
          <li>
            <a href="https://web.facebook.com/muhammad.shahzaib.5011516/" target="_blank">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/MUHAMMAD-SHAHZAIB" target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
              <InstagramIcon />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/muhammad-shahzaib0312/" target="_blank">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>

      <p>
        copyright &copy;2021 <a href="shahzaibktk78@outlook.com">shahzaibktk78@outlook.com</a>{" "}
      </p>
    </div>
  );
};

export default Footer;
