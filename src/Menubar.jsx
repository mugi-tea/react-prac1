import React, { useState } from "react";
import "./Menubar.css";

const Menubar = () => {
  const [toggleActive, setToggleActive] = useState(true);
  const [toggleActiveLate, setToggleActiveLate] = useState(true);

  const classToggle = () => {
    setToggleActive(!toggleActive);
    /*
    setTimeout(() => {
      setToggleActiveLate(!toggleActiveLate);
    }, 500);*/
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
        <div className="menuList">
          <ul>
            <li>
              <span className="menuIcon">
                <i className="bx bxs-home"></i>
              </span>
              <span className="menuText">My</span>
            </li>
            <li>
              <span className="menuIcon">
                <i className="bx bxs-group"></i>
              </span>
              <span className="menuText">Others</span>
            </li>
            <li>
              <span className="menuIcon">
                <i className="bx bxs-pencil"></i>
              </span>
              <span className="menuText">Create</span>
            </li>
            <li>
              <span className="menuIcon">
                <i className="bx bxs-cog"></i>
              </span>
              <span className="menuText">Setting</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="toggle" onClick={() => classToggle()}>
        <i className="bx bx-chevron-left"></i>
      </button>
    </div>
  );
};

export default Menubar;
