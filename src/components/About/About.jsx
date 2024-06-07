import React from "react";
import "./About.scss";
import sep from "/sep.png";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <div className="containerAbout">
      <div className="About">
        <div className="me">
          <h4>ABOUT ME</h4>
        </div>
        <p>
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero <br /> viverra facilisis ut ac est.
        </p>
        <div className="EX">
          <h3>EXPLORE</h3>
        </div>
        <img src={sep} alt="" />
        <div className="ican">
          <div className="ican1">
            <div className="ican_flex">
              <h3>DESIGN</h3>
              <p>
                I can design the site based on your needs and suggestions. I can{" "}
                <br />
                also design the site from scratch and consult you during the
                job. <br />
              </p>
            </div>
          </div>
          <div className="ican1">
            <div className="ican_flex">
              <h3>DEVELOPMENT</h3>
              <p>
                I can design the site based on your needs and suggestions. I can{" "}
                <br />
                also design the site from scratch and consult you during the
                job. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="ican1">
          <div className="ican_flex">
            <h3>MAINTENANCE</h3>
            <p>
              I can design the site based on your needs and suggestions. I can{" "}
              <br />
              also design the site from scratch and consult you during the job.{" "}
              <br />
            </p>
          </div>
        </div>
        <img src={sep} alt="" />
        <section id="Skills">
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default About;
