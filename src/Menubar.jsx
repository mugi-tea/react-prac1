import React, { useState } from "react";
import "./Menubar.css";

const Menubar = () => {
  const [toggleActive, setToggleActive] = useState(true);

  const classToggle = () => {
    setToggleActive(!toggleActive);
  };

  const activeLink = (number) => {
    const list = document.querySelectorAll(".menuItem");
    list.forEach((item) => item.classList.remove("active"));
    const activateItem = document.querySelectorAll(".menuItem")[number];
    activateItem.classList.add("active");

    /*
    const list = document.querySelectorAll(".menuItem");
    console.log(list);
    console.log(list[0]);
    list.forEach((item) => {
      item.classList.remove("active");
    });*/
  };

  return (
    <div className={`sidebar ${toggleActive ? "close" : ""}`}>
      <div className="menubar">
        <div className="header">
          <div className="logo">
            <span className="logoIcon">
              <i className="bx bxs-car"></i>
            </span>
            <span className="logoText">exciroute</span>
          </div>
        </div>
        <ul className="menuList">
          <li className="menuItem active">
            <button onClick={() => activeLink(0)}>
              <span className="menuIcon">
                <i className="bx bxs-home"></i>
              </span>
              <span className="menuText">My</span>
            </button>
          </li>
          <li className="menuItem">
            <button onClick={() => activeLink(1)}>
              <span className="menuIcon">
                <i className="bx bxs-group"></i>
              </span>
              <span className="menuText">Others</span>
            </button>
          </li>
          <li className="menuItem">
            <button onClick={() => activeLink(2)}>
              <span className="menuIcon">
                <i className="bx bxs-pencil"></i>
              </span>
              <span className="menuText">Create</span>
            </button>
          </li>
          <li className="menuItem">
            <button onClick={() => activeLink(3)}>
              <span className="menuIcon">
                <i className="bx bxs-cog"></i>
              </span>
              <span className="menuText">Setting</span>
            </button>
          </li>
          <div className="indicator"></div>
        </ul>
        <div className="footer">
          <button className="logoutButton">
            <span className="logoutIcon">
              <i className="bx bx-log-out"></i>
            </span>
            <span className="logoutText">Logout</span>
          </button>
        </div>
      </div>
      <button className="toggle" onClick={() => classToggle()}>
        <i className="bx bx-chevron-left"></i>
      </button>
    </div>
  );
};

export default Menubar;
