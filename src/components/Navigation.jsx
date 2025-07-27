import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo";
import "./Navigation.css";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="navbar_container">
      <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
        <div className="wrapper_navigation">
          <div className="logo">
            <Logo />
          </div>
          <div className="buttons">
            <button className="btn">Log In</button>
            <button className="singIn btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
