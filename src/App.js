import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/Projects";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from './Components/Contact/Contact';
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
// import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  // const [headerBg, setHeaderBg] = useState("transparent");

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   if (scrollPosition > 70) {
  //     setHeaderBg(themename === "light" ? "#fcfcfc" : "#1D9BF0");
  //   } else {
  //     setHeaderBg("transparent");
  //   }
  // };

  return (
    <div id="top" className={`${themename} app`}>
      <section className="header_section" id="#home" >
        <Header />
      </section>
      <main>
        <About />
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <ScrollToTop /> 
    </div>
  );
}
