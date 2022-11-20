import React from "react";
import "../styles/footer.scss";
import world from "../images/world.svg";
import logo from "../images/logosvg.svg";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_inner">
          <div className="logo_row">
            <img src={logo} alt="logo" />
            <p>Voxclips</p>
          </div>

          <div className="works_row">
            <ul>
              <li>How it works</li>
              <li>Use Cases</li>
              <li>About</li>
              <li>Avatars</li>
              <li>Custom Avatar</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="support_row">
            <ul>
              <li>Support</li>
              <li>Community</li>
              <li>Careers</li>
              <li>Press</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="pricing_row">
            <ul>
              <li>Pricing</li>
              <li>Terms of service</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>

            <button>
              {" "}
              <img src={world} alt="logo" />
              English{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
