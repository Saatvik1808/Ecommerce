import React from "react";
import "./Foot.css";

const Footer = () => {
  return (
    <div className="footer  bg-opacity-80 text-white py-3">
      <div className="container text-center">
        <h1 className="mb-0">All Rights Reserved &copy; Saatvik</h1>
        <div className="social-links">
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1 github-icon"
            href="https://github.com/Saatvik1808?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1 instagram-icon"
            href="https://www.instagram.com/7._.vik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1 linkedin-icon"
            href="https://www.linkedin.com/in/saatvik-shrivastava-096a68175/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
