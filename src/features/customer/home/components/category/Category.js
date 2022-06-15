import React from "react";
import "./style.css";
import logo1 from "../../../../../assest/images/logoshoe/1.png";
import logo2 from "../../../../../assest/images/logoshoe/2.png";
import logo3 from "../../../../../assest/images/logoshoe/3.png";
import logo4 from "../../../../../assest/images/logoshoe/4.jpeg";
import logo5 from "../../../../../assest/images/logoshoe/5.png";
import logo6 from "../../../../../assest/images/logoshoe/6.webp";
import logo7 from "../../../../../assest/images/logoshoe/7.jpg";
import logo8 from "../../../../../assest/images/logoshoe/8.png";
import logo9 from "../../../../../assest/images/logoshoe/9.png";

const Category = () => {
  return (
    <ul className="category">
      <li>
        <img src={logo1} alt="" /> Addidas
      </li>
      <li>
        <img src={logo2} alt="" /> ASICS
      </li>
      <li>
        <img src={logo3} alt="" /> Converse
      </li>
      <li>
        <img src={logo4} alt="" /> Balenciaga
      </li>
      <li>
        <img src={logo5} alt="" /> New Balance
      </li>
      <li>
        <img src={logo6} alt="" /> Nike
      </li>
      <li>
        <img src={logo7} alt="" /> Puma
      </li>
      <li>
        <img src={logo8} alt="" /> Reebok
      </li>
      <li>
        <img src={logo9} alt="" /> Vans
      </li>
    </ul>
  );
};

export default Category;
