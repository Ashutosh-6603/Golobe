import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import "../../App.css";
import Footer from "../../components/Footer/Footer.js";
import "../LandingPage/LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-image text-white mt-7 rounded-lg mx-8">
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
