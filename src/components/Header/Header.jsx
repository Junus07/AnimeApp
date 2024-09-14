import React from "react";
import "./Header.css";
import logo from "../../img/logo2.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <h1 className="header__title">AnimeApp</h1>
    </div>
  );
};

export default Header;
