import React from "react";
import "./Header.css";
import logo from "../../img/logo2.png";
import HeaderMobile from "../mobile/HeaderMobile/HeaderMobile";
import { isMobile } from "react-device-detect";

const Header = () => {
  return isMobile ? <HeaderMobile /> : (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <h1 className="header__title">AnimeApp</h1>
    </div>
  );
};

export default Header;
