import computer from "../assets/computer.svg"
import { useState } from "react";
import "animate.css";


export function Header() {

  const [homeisFlash, setHomeIsFlash] = useState(false);
  const [aboutIsFlash, setAboutIsFlash] = useState(false);
  const [projectIsFlash, setProjectIsFlash] = useState(false);
  const [contactIsFlash, setContactIsFlash] = useState(false);
  const [brandIsFlash, setBrandIsFlash] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }
    


  return(
   <section className="header-con">
      <div className="header-div">
        <div className="header-space"></div>

      {/* Brand Section*/}
        <div className={`header-brand-jonelle animate__animated ${
        brandIsFlash ? "animate__bounceIn" : ""}`}
        onMouseOver={() => setBrandIsFlash(true)}
        onAnimationEnd={() => setBrandIsFlash(false)}>Jonelle
    </div>

        <div className="header-space"></div>

        <div className="navigation-lists-con">

    <div className={`home-jonelle animate__animated ${
        homeisFlash ? "animate__bounceIn" : ""}`}
        onMouseOver={() => setHomeIsFlash(true)}
        onAnimationEnd={() => setHomeIsFlash(false)} id="home">Home
    </div>

    <div className={`about-jonelle animate__animated ${
        aboutIsFlash ? "animate__bounceIn" : ""}`}
        onMouseOver={() => setAboutIsFlash(true)}
        onAnimationEnd={() => setAboutIsFlash(false)}id="about"><a href="#about">About</a>
    </div>

    <div className={`about-jonelle animate__animated ${
        projectIsFlash ? "animate__bounceIn" : ""}`}
        onMouseOver={() => setProjectIsFlash(true)}
        onAnimationEnd={() => setProjectIsFlash(false)}id="projects">Projects
    </div>

    <div className={`about-jonelle animate__animated ${
        contactIsFlash ? "animate__bounceIn" : ""}`}
        onMouseOver={() => setContactIsFlash(true)}
        onAnimationEnd={() => setContactIsFlash(false)} id="contact">Contact
    </div>

        </div>

        {/*  Dark Mode Toggle */}

        <div className="checkbox-wrapper-55">
      <label className="rocker rocker-small">
        <input
          type="checkbox"
        />

        {/* Left Switch: Moon */}
        <span
          className="switch-left"
        >
          🌙
        </span>

        {/* Right Switch: Sun */}
        <span
          className="switch-right"
        >
          ☀️
        </span>
      </label>
    </div>
      </div>
    </section>

  );
}