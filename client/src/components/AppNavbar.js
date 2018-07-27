import React, {Component} from 'react';
import logo from './erplogo.png';
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
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand style={{ width: 95 }} className="mr-0" href="/">
          <img width ="40%" src={logo}/>
             C.A.I.R
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
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
              </Nav>
              <Nav className="ml-auto" navbar>
              <NavItem className="">
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;
