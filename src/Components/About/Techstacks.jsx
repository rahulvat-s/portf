import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap} from "react-icons/bs";
import { FaPhp } from 'react-icons/fa';
import { SiOracle, SiMysql } from "react-icons/si";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5 className="hcolor">Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5 className="hcolor">HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5 className="hcolor">CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5 className="hcolor">React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5 className="hcolor">Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5 className="hcolor">MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5 className="hcolor">Express</h5>
          </div>

          <div>
            <FaPhp />
            <h5 className="hcolor">PHP</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5 className="hcolor">Bootstrap</h5>
          </div>
          <div>
            <SiOracle />
            <h5 className="hcolor">Oracle</h5>
          </div>
          <div>
            <SiMysql />
            <h5 className="hcolor">Sql</h5>
          </div>
          <div>
            <VscGithub />
            <h5 className="hcolor">Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
