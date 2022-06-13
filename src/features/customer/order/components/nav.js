import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="navigate">
      <div className="navigation__column center">
        <ul className="nav__header__ul">
          <li className="menu__header" id="menu">
            <NavLink to={`all`}> TẤT CẢ</NavLink>
          </li>
          <li className="menu__header" id="menu">
            <NavLink to={`processing`}>ĐANG XỬ LÝ</NavLink>
          </li>
          <li className="menu__header" id="menu">
            <NavLink to={`processed`}>ĐÃ XỬ LÝ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
