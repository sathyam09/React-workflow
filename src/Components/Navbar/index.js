import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Row, Container, Col } from "react-bootstrap";
import SideNavBar from "./Sidebar";
import TopnavBar from "./Topnav";
import Dashboard from '../Pages/dashboard';
import TodoApp from '../Pages/teams'
import Projects from "../Pages/projects";
import Documents from "../Pages/documents";
import Reports from "../Pages/report";
import Calendar from "../Pages/calendar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Container fluid>
          <Row>
            <SideNavBar />

            <Col sm={10} className="main-content">

              <TopnavBar />
              <div className="body-content">

              <Switch>
                <Route exact  path="/dashboard" component={Dashboard}/>
                <Route path="/teams" component={TodoApp}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/calendar" component={Calendar} />
                <Route path="/documents" component={Documents}/>
                <Route path="/reports" component={Reports} />
              </Switch>
              </div>


            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </Router>
  );
}

export default Navbar;
