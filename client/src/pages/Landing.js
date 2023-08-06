import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.js";
import Typewriter from "typewriter-effect";
import "../pages/Landing.css";
import BooksScene from "./canvas/BooksScene.jsx";

const LandingPage = () => {
  return (
    <Layout>
      <div className="landing-page">
        <div className="landing-content">
          <Typewriter
            className="custom-typewriter" // Add custom class here
            options={{
              strings: ["Welcome to Prisa ", "Your Personalized Book store"],
              autoStart: true,
              loop: true,
            }}
          />
         
          <Link to="/home" className="button-85">
            Shop Now
          </Link>
        </div>
        <div className="landing-3d-model">
          <BooksScene />
        </div>
      </div>
    </Layout>
  );
};
//
export default LandingPage;
