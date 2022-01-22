import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "./Navibar.module.css";
import {useUser} from "../../../hooks/hooks";
import NavibarNotifications from "../../Notifications/NavibarNotifications";

const UnderNavibar = () => {
    const user = useUser();
    return (
        <div className="undernavbar">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px', alignItems: "center"}}
                         navbarScroll>
                        <Nav.Link><Link to='/user' className={classes.linksUnd}>{user.name}</Link></Nav.Link>
                        <NavibarNotifications/>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default UnderNavibar;