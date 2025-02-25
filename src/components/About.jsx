import jonelle from '../assets/jonelle-full.jpg';
import 'animate.css';
import { useState } from 'react';

export function About() {

  return(
    <section className="main-container" id='about'>
      <div className="leftSide"></div>

      <div className="middle-con">
        <div className="mid-left">
          <img src={jonelle} alt="jonelle photo"  className='mid-left-photo' tabIndex={0}/>
        </div>

        <div className="mid-right">
          <div className="mid-right-title-text"><span className='mid-span-text'>Hi!</span> I'm Jonelle</div>
          <div className="mid-right-p-text">Frontend Developer</div>
          <div className="mid-right-des-text">Hi there! I’m just a girl with a passion for web development, currently on my journey to learn how to code. I love exploring new technologies and creative ways to build engaging web experiences.</div>
        </div>
      </div>

      <div className="rightSide"></div>
    </section>
  );
}