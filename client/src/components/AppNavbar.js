import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="lg">
                    <NavbarBrand className="ml-5" href="/">
                        Incident <br /> Reporting
                    </NavbarBrand>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/" />
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
