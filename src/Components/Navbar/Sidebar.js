import React from "react";
import { Col } from "react-bootstrap";
import { SidebarData } from "../sidebarData";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <Col sm={2}>
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <FaIcons.FaSitemap /> workflow
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Col>
  );
};

export default SideNavBar;
