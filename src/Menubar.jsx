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
        <ul className="menuList">
          <li className="menuItem">
            <button>
              <span className="menuIcon">
                <i className="bx bxs-home"></i>
              </span>
              <span className="menuText">My</span>
            </button>
          </li>
          <li className="menuItem">
            <button>
              <span className="menuIcon">
                <i className="bx bxs-group"></i>
              </span>
              <span className="menuText">Others</span>
            </button>
          </li>
          <li className="menuItem">
            <button>
              <span className="menuIcon">
                <i className="bx bxs-pencil"></i>
              </span>
              <span className="menuText">Create</span>
            </button>
          </li>
          <li className="menuItem">
            <button>
              <span className="menuIcon">
                <i className="bx bxs-cog"></i>
              </span>
              <span className="menuText">Setting</span>
            </button>
          </li>
        </ul>
        <div className="footer">
          <button className="logoutButton">
            <span className="logoutIcon">
              <i class="bx bx-log-out"></i>
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
