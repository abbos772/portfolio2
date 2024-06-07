import React from "react";
import "./Slills.scss";
import html from "/Group12.svg";
import css from "/Groups.svg";
import vector from "/Vector.svg";
import rc from "/Groupr.svg";
import git from "/git.svg";
import js from "/js.svg";
import bo from "/bootstrap.svg";
import figma from "/figma.svg";
import not from "/nod.png";
import del from "/del.svg";
import ts from "/TS.png";
import rus from "/rus.jpg";
import uz from "/uz.jpg";
import en from "/enn.svg";
import c from "/c++.svg";
const Skills = () => {
  return (
    <div>
      <div className="me">
        <h4>SKILLS</h4>
      </div>
      <div className="skills">
        <div className="nos">
          <h1>USING NOW:</h1>
        </div>

        <div className="skl">
          <div className="skill_box">
            <img src={html} alt="" />
            <h3>HTML</h3>
          </div>
          <div className="skill_box">
            <img src={css} alt="" />
            <h3>CSS</h3>
          </div>
          <div className="skill_box">
            <img src={vector} alt="" />
            <h3>SASS</h3>
          </div>
          <div className="skill_box">
            <img src={js} alt="" />
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="skill_box">
            <img src={rc} alt="" />
            <h3>REACT</h3>
          </div>
          <div className="skill_box">
            <img src={bo} alt="" />
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="skill_box">
            <img src={git} alt="" />
            <h3>GIT</h3>
          </div>
          <div className="skill_box">
            <img src={figma} alt="" />
            <h3>FIGMA</h3>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="nos">
          <h1>LEARNING:</h1>
        </div>

        <div className="skl">
          <div className="skill_box">
            <img src={not} alt="" />
            <h3>NOTEJS</h3>
          </div>
          <div className="skill_box">
            <img src={del} alt="" />
            <h3>MONGODB</h3>
          </div>
          <div className="skill_box">
            <img src={ts} alt="" />
            <h3>TYPESCRIPT</h3>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="nos">
          <h1>OTHER SKILLS:</h1>
        </div>

        <div className="skl">
          <div className="skill_box">
            <img src={rus} width={150} alt="" />
            <h3>Russian</h3>
          </div>
          <div className="skill_box">
            <img src={uz} width={150} alt="" />
            <h3>UZBEKBEK</h3>
          </div>
          <div className="skill_box">
            <img src={en} width={85} alt="" />
            <h3>TYPESCRIPT</h3>
          </div>
          <div className="skill_box">
            <img src={c} width={85} alt="" />
            <h3>C++</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
