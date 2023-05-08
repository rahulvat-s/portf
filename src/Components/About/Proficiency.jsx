import React from "react";
import "./Proficiency.css";
import { ThemeContext } from "../../Context/theme";
import buildJson from "../../animation/build.json";
import Lottie from "lottie-react";

export const Proficiency = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          <span className="different">Proficiency</span>
        </h2>
        <div className="parent-container">
          <div class="datacontainer">
            <div class="skills">
              <div class="details">
                <span>FRONTEND</span>
                <span>90%</span>
              </div>
              <div class="bar">
                <div id="frontend-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>BACKEND</span>
                <span>75%</span>
              </div>
              <div class="bar">
                <div id="backend-bar"></div>
              </div>
            </div>
            <div class="skills">
              <div class="details">
                <span>PROGRAMMING</span>
                <span>72%</span>
              </div>
              <div class="bar">
                <div id="programming-bar"></div>
              </div>
            </div>
          </div>
          <div className="imagecontainer">
          <Lottie loop={true} animationData={buildJson}/>
          </div>
        </div>
      </div>
    </>
  );
};
