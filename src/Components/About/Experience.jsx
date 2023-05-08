import React from "react";
import "./Experience.css";
import { ThemeContext } from "../../Context/theme";
import workJson from "../../animation/work.json";
import Lottie from "lottie-react";
import { FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          <span className="different">Experience</span>
        </h2>
        <div className="parent-container">
          <div className="imagecontainer">
            <Lottie loop={true} animationData={workJson} />
          </div>
          <div className="datacontainer">
          <div className="cards">
            <FaBriefcase />
            <h4 className="h4color">Virtuos Digital Ltd.</h4>
            <h5 className="h5color">Software Developer</h5>
            <p className="pcolor">Jan 2022-Present</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
