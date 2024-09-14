import React from "react";
import logo from "../../../img/logo2.png";
import Sidebar from "../../Sidebar/Sidebar";


const HeaderMobile = () => {
  return (
    <>
    <div className="header">
      <div className="logocontainer">
      <img className="header__logo" src={logo} alt="" />
      <h1 className="header__title">AnimeApp</h1>
      </div>
    <div className="sidebarcontainer">
      <Sidebar/>
    </div>
    </div>
    </>
  );
};

export default HeaderMobile;