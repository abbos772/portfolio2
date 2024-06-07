import React from "react";
import "./Header.scss";
import abbos from "/image17.png";
import { SiTelegram } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";
import { GrYoutube } from "react-icons/gr";
import About from "../About/About";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="head">
            <div className="head_text">
              <p>Hi I'm...</p>
              <h1>
                <Typewriter
                  words={["Qodirov Abbos"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <h4>Front-end Developer / UI Designer</h4>
              <div className="nets">
                <div className="net">
                  <a
                    href="https://t.me/insta_abboskadirov04"
                    aria-label="Telegram"
                  >
                    <SiTelegram />
                  </a>
                </div>
                <div className="net">
                  <a
                    href="https://www.instagram.com/abboskadirov04/"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram />
                  </a>
                </div>
                <div className="net">
                  <a href="https://github.com/" aria-label="GitHub">
                    <VscGithubInverted />
                  </a>
                </div>
                <div className="net">
                  <a href="https://youtube.com/" aria-label="YouTube">
                    <GrYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="head_img">
              <img src={abbos} width={600} alt="Qodirov Abbos" />
            </div>
          </div>
        </div>
        <div className="gap">
          <div className="container">
            <div className="gap_text">
              <h1>IT BERRIES</h1>
              <p>
                Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
                sem varius finibus. Sed ornare sit amet lorem sed viverra. In
                vel urna quis libero viverra facilisis ut ac est. Morbi commodo,
                eros in dignissim tempus, lacus odio rutrum augue, in semper sem
                magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum
                sit amet elit. Nunc egestas nisi eget enim gravida facilisis.
                Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
                consequat vitae elementum tempor, accumsan nec eros.
              </p>
              <h4>READ MORE</h4>
            </div>
          </div>
        </div>
      </header>

      <section id="About">
        <About />
      </section>
    </>
  );
};

export default Header;
