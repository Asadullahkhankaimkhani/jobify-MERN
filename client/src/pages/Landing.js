import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            aut delectus praesentium hic, earum cupiditate consequuntur adipisci
            voluptatum. Amet sed cupiditate vel at? Placeat dolore iure cumque
            sint, accusantium est.
          </p>

          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="jon hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
