import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join to Adventure newsletter to receive our best vacation deals.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/page404">How it works</Link>
            <Link to="/page404">Testimonials</Link>
            <Link to="/page404">Careers</Link>
            <Link to="/page404">Investors</Link>
            <Link to="/page404">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/page404">Contact</Link>
            <Link to="/page404">Support</Link>
            <Link to="/page404">Destinations</Link>
            <Link to="/page404">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/page404">Submit Video</Link>
            <Link to="/page404">Ambassadors</Link>
            <Link to="/page404">Agency</Link>
            <Link to="/page404">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/page404">Instagram</Link>
            <Link to="/page404">Facebook</Link>
            <Link to="/page404">Youtube</Link>
            <Link to="/page404">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              ASIA SEASONS <FontAwesomeIcon icon="fa-solid fa-earth-asia" />
            </Link>
          </div>
          <small className="website-rights">ASIA SEASONS &copy; 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/page404"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/page404"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/page404"
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/page404"
              target="_blank"
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/page404"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
