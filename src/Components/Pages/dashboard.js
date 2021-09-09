import React from "react";
import * as FaIcons from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import DashBox from "../Dashbox";
import { DashBoardList } from "../sidebarData";

const Dashboard = () => {
  return (
    <div>
      <div className="dash-board">
        <div className="dash-title">
          <h1>DASHBOARD</h1>
          <p>Multikart Admin Panel</p>
        </div>

        <div className="dash-navLink">
          <FaIcons.FaHome /> / Dashboard / dashboard
        </div>
      </div>
      <div className="container">
        <Row md={2}>
          {DashBoardList.map((item, index) => {
            return (
              <Col key={index}>
                <DashBox data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
