import React from "react";
import { NavBar } from "./NavBar";
import Hero from "./Hero";
import GridSection from "./GridSection";
import Artist from "./Artist";
import Footer from "./Footer";

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="nav_sec">
          <NavBar />
        </div>

        <div className="hero_sec">
          <Hero />
        </div>

        <div className="grid_area">
          <GridSection />
        </div>

        <div className="artist_section">
          <Artist />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </section>
    </>
  );
};
