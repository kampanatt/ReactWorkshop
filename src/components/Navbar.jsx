import React, { useState } from "react"
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, NavItem } from "reactstrap"
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom"

const Navbars = (prps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React Workshop</NavbarBrand>
        <NavbarToggler />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                หน้าแรก
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                เกี่ยวกับ
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                ติดต่อเรา
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navbars
