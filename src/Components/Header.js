import React from "react";
import {Image, Nav, Navbar } from "react-bootstrap";
import logoPath from "../Assets/logo.png";

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" style={{padding: "10px"}}>
                    <Navbar.Brand href="home">
                        <Image src={logoPath} style={{width: "30px", align: "top"}}/>{' '}
                        Maplify
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="logger">Logger</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;