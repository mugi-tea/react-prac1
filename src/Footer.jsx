import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [toggleActive, setToggleActive] = useState(true);

  const classToggle = () => {
    setToggleActive(!toggleActive);
  };

  const activeLink = (number) => {
    const list = document.querySelectorAll(".menuItem");
    const footerList = document.querySelectorAll(".footerMenuItem");
    list.forEach((item) => item.classList.remove("active"));
    footerList.forEach((item) => item.classList.remove("active"));
    const activateItem = document.querySelectorAll(".menuItem")[number];
    const footerActiveItem =
      document.querySelectorAll(".footerMenuItem")[number];
    activateItem.classList.add("active");
    footerActiveItem.classList.add("active");
  };

  return (
    <div className="footer-sm">
      <ul className="footerMenuList">
        <li className="footerMenuItem active">
          <button onClick={() => activeLink(0)}>
            <i className="bx bxs-home"></i>
            <div className="footerMenuItemText">My</div>
          </button>
        </li>
        <li className="footerMenuItem">
          <button onClick={() => activeLink(1)}>
            <i className="bx bxs-group"></i>
            <div className="footerMenuItemText">Others</div>
          </button>
        </li>
        <li className="footerMenuItem">
          <button onClick={() => activeLink(2)}>
            <i className="bx bxs-pencil"></i>
            <div className="footerMenuItemText">Create</div>
          </button>
        </li>
        <li className="footerMenuItem">
          <button onClick={() => activeLink(3)}>
            <i className="bx bxs-cog"></i>
            <div className="footerMenuItemText">Setting</div>
          </button>
        </li>
        <div className="footerIndicator">
          <div className="footerIndicatorMain"></div>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
