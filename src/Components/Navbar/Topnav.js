import React from 'react';
import * as FaIcons from "react-icons/fa";

import douglas from '../../images/douglas.png'
import { Navbar, Nav } from 'react-bootstrap';



const TopnavBar = () => {

    return(

        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                               
                                <Navbar.Collapse id="basic-navbar-nav">
                               
                                    <div><FaIcons.FaSearch />   <input  type="text" placeholder="Search" className="mr-sm-2 nav-search" /></div>
                              
                                    <Nav className="justify-content-end">
                                    <Nav.Link href="/" className="notification-icon">
                                <FaIcons.FaRegBell /> <img id="profile" src={douglas} alt="John Anderson"></img>
                                    </Nav.Link>
                                   
                                    
                                    </Nav>
                                  
                                </Navbar.Collapse>
                            </Navbar>
    //     <div className="navbar">
    //     <div className="Search-bar">
    //    <FaIcons.FaSearch />  <input id="serachBar" type="text" placeholder="Search" name="search" />
    //     </div>
    //     <div className="notification-icon">
    //         <FaIcons.FaRegBell /> <img id="profile" src="src\images\douglas.png" alt="John Anderson"></img></div>
    //   </div>
      
    )
}

export default TopnavBar;