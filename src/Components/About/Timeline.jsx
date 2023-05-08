import React from "react";
import "./Timeline.css";
import { ThemeContext } from "../../Context/theme";
import educationJson from "../../animation/education.json";
import Lottie from "lottie-react";
import { FaGraduationCap } from 'react-icons/fa';

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          <span className="different">Education</span>
        </h2>
        <div className="parent-container">
        <div className="datacontainer">
          <div className="cards">
            <FaGraduationCap />
            <h4 className="h4color">BTech CSE</h4>
            <h5 className="h5color">Maharshi Dayanand University</h5>
            <p className="pcolor">2018-2022</p>
          </div>
          </div>
          <div className="imagecontainer">
            <Lottie loop={true} animationData={educationJson} />
          </div>
        </div>
      </div>
    </>
  );
};
