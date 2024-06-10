import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navigation.css'; // Ensure to use SCSS

function Navigation({ data, handleLogout }) {
    return (
        <Navbar expand="lg" className="custom-navbar rounded-navbar">
            <Navbar.Brand className="ms-3" href="/">
                <img
                    src="https://banner2.cleanpng.com/20180413/rfe/kisspng-google-logo-google-cloud-platform-gboard-google-pa-4-5ad0e95b57ec99.9189954815236406673602.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto ms-3">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" className="nav-link mx-4" activeClassName="active">
                        Dashboard
                    </NavLink>
                    <NavLink to="/contact" className="nav-link" activeClassName="active">
                        Contact
                    </NavLink>
                </Nav>
                <div className="me-3">
                    {data ? (
                        <Button className="custom-button" onClick={handleLogout}>
                            Sign-out
                        </Button>
                    ) : (
                        <Button className="custom-button" style={{color:'white'}} component={NavLink} to="/login">
                            Login
                        </Button>
                    )}
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
