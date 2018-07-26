import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props){
        super(props);
  }

  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand className="ml-5" href="/">Incident <br/> Reporting
          </NavbarBrand>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink href="/ReportPage">Report</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink href="/About">About</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink href="/Incidents">Past Incidents</NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink href="/Contact">Contact Us </NavLink>
              </NavItem>
              <NavItem className="mr-5">
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;