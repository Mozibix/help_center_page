import React from "react";
import search from "../images/search.png";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_inner">
          <p className="header_text">How Can We Help You?</p>
          <p className="info_text">Search here for answers to your questions</p>

          <img src={search} alt="search" />
          <input type="text" placeholder="What do you need help with" />

          <ul>
            <li>Popular Keywords:</li>
            <li>security</li>
            <li>export</li>
            <li>how to</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Hero;
