import React from "react";
import "./About.css";
import { Type } from "./Type";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Proficiency } from "./Proficiency";
import { Experience } from "./Experience";
import { Techstacks } from "./Techstacks";
import imageJson from "../../animation/coding.json";
import Lottie from "lottie-react";
import { ThemeContext } from "../../Context/theme";
export const About = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <div class="parent-container" id="mainparent-container">
        <div class="about center">
          <h1 data-aos="fade-right" class="mobileHead">
            <span class="about__greeting">Hello, I am</span>
            <br></br>
            <span class="about__name">Rahul Vats</span>
          </h1>
          <Type />
          <p class="about__desc" data-aos="fade-right">
            Passionate, creative and a professional Full Stack Developer having
            proficiency in MERN Stack. A quick learner with a self-learning
            attitude. Attired with a variety of tools & technologies and keen to
            learn new ones.
          </p>
          <div class="about__contact center">
            <a
              href="https://instagram.com/_rahul__vats_"
              aria-label="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://github.com/"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:rahulvats166@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="mail"
            >
              <EmailIcon />
            </a>
            <a
              href="tel:+917988420419"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
            >
              <PhoneIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-vats-05993521b/"
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
            <button className="btnContact" onClick={() => toggleNavList("#contact")}>Contact</button>
        </div>
        <div class="image-container">
          <Lottie loop={true} animationData={imageJson} />
        </div>
      </div>

      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
      <Proficiency />
      <Experience />
    </>
  );
};
