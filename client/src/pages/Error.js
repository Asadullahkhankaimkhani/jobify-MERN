import React from "react";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not-found" />
        <h3>Oh! Not Found</h3>
        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
