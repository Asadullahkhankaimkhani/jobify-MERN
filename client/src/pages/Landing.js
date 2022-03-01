import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span>app
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aut
          delectus praesentium hic, earum cupiditate consequuntur adipisci
          voluptatum. Amet sed cupiditate vel at? Placeat dolore iure cumque
          sint, accusantium est.
        </p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
      <img src={main} alt="jon hunt" className="img main-img" />
    </main>
  );
};

export default Landing;
