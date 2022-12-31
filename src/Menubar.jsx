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

            {!toggleActive && <span className="logoText">exciroute</span>}
          </div>
        </div>
      </div>
      <button className="toggle" onClick={() => classToggle()}>
        <i className="bx bx-chevron-right"></i>
      </button>
    </div>
  );
};

export default Menubar;
