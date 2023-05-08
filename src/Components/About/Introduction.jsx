import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/logo.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4 className="hdifferent">
                Hi Everyone, My name is{" "}
                <span className="different">Rahul vats. </span> I'm a Software Developer based in Gurgaon, India and  I am from{" "}
                <span className="different">
                  {" "}
                  Bahadurgarh, Haryana (India)
                </span>
                . I have completed my graduation in BTech (Computer science and engineering)
                from{" "}
                <span className="different">
                Maharshi Dayanand University, (Haryana).
                </span>
                My current stack includes NodeJs, NestJs, ExpressJs, NextJs, ReactJs, Bootstrap, MongoDB, Mysql, Rightnow, PHP etc.
              </h4>
              <h4 className="hdifferent">Apart form Coding my hobbies are:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gyming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Chessmanship{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Binge-watching{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricketing{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
