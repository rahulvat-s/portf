import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/logo.jpg";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="imagelink">
            <span className="logo-img-wrapper">
              <img src={Image} alt="logo" className="logo-img flip" />
            </span>
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
