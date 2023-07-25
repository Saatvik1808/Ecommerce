import "./Foot.css";
import React from "react";

const Footer = () => {
  return (
    <div
      className="footer bg-dark text-white py-3"
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      <div className="container text-center">
        <h1 className="mb-0">All Rights Reserved &copy; Saatvik</h1>
        <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        /><i class="fab fa-twitter"></i>
        <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        /><i class="fab fa-instagram"></i>
  
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="#!"
          role="button"
          data-mdb-ripple-color="dark"
       />
          <i class="fab fa-linkedin"></i>
       
      </div>
    </div>
  );
};

export default Footer;
