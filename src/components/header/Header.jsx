import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import Typed from 'react-typed'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>C Sai Pranay</h1>
        <span className="primary-text second">
          {" "}
          <p>
            {" "}
            <Typed
              strings={["Front End Developer", "Software Engineer"]}
              typeSpeed={80}
              backDelay={1000}
              backSpeed={30}
              loop
            />
          </p>
        </span>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>

    </header>
    
  );
};

export default Header;
