import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ header, items }) => {
  return (
    <div className="menu">
      <div className="blur" />
      <div className="menu__content">
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li>
              <a href={item.href}>{item.value}</a>
              <FontAwesomeIcon icon="fa-brands fa-youtube" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
