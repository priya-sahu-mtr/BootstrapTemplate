
import React, { useState } from 'react';
import './NavBar.css';
import BasicBar from '../Charts/BasicBar';
import { Navbar, Nav, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import {
  FaSearch, FaUser, FaTachometerAlt, FaLayerGroup, FaChartBar, FaTable, FaFileAlt
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AppNavbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="d-flex ">
      <div className={`sidebar ${isSidebarVisible ? 'show' : 'hide'}`}>
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title p-4">CORE</h5>
          <button type="button" className="btn-close text-reset pr-3" onClick={toggleSidebar}></button>
        </div>
        <div className="offcanvas-body">
          <Nav className="d-flex flex-column bg-dark text-white h-100">
            <Nav.Item>
              <Nav.Link href="#" className="text-white"><FaTachometerAlt /> Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">INTERFACE</Nav.Link>
              <Nav className="flex-column ms-3">
                <Dropdown show={openDropdown === 'layouts'} onToggle={() => handleDropdownClick('layouts')}>
                  <Dropdown.Toggle as="a" className="nav-link text-white dropdown-toggle">
                    <FaLayerGroup /> Layouts
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-dark">
                    <Dropdown.Item href="#">Static Navigation</Dropdown.Item>
                    <Dropdown.Item href="#">Light Sidenav</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown show={openDropdown === 'pages'} onToggle={() => handleDropdownClick('pages')}>
                  <Dropdown.Toggle as="a" className="nav-link text-white dropdown-toggle">
                    <FaFileAlt /> Pages
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-dark">
                    <Dropdown>
                      <Dropdown.Toggle as="a" className="nav-link text-white dropdown-toggle ms-3">
                        Authentication
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-dark">
                        <Dropdown.Item href="#">Login</Dropdown.Item>
                        <Dropdown.Item href="#">Register</Dropdown.Item>
                        <Dropdown.Item href="#">Forgot Password</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle as="a" className="nav-link text-white dropdown-toggle ms-3">
                        Error
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-dark">
                        <Dropdown.Item href="#">401 Page</Dropdown.Item>
                        <Dropdown.Item href="#">404 Page</Dropdown.Item>
                        <Dropdown.Item href="#">500 Page</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="text-white">ADDONS</Nav.Link>
              <Nav className="flex-column ms-3">
                <Nav.Link href="#" className="text-white"><FaChartBar /> Charts</Nav.Link>
                <Nav.Link href="#" className="text-white"><FaTable /> Tables</Nav.Link>
              </Nav>
            </Nav.Item>
            <div className="mt-auto p-3 bg-secondary text-white ">
              <div>Logged in as:</div>
              <div>Start Bootstrap</div>
            </div>
          </Nav>
        </div>
      </div>
      <div className={`content flex-grow-1 ${isSidebarVisible ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
          <Button variant="dark" className="me-2" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary"><FaSearch /></Button>
          </Form>
          <Dropdown align="end">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <FaUser />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Settings</Dropdown.Item>
              <Dropdown.Item href="#">Activity Log</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
        <BasicBar />
      </div>
    </div>
  );
}

export default AppNavbar;
