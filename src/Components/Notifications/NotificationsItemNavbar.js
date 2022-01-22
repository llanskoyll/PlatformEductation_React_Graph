import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "../UI/navbar/Navibar.module.css";

const HomeItemNavbar = () => {
    return (
            <Nav className="me-auto">
                <Nav.Link>
                    <Link to='/home' className={classes.linksItem}>
                        Главная
                    </Link>
                </Nav.Link>
            </Nav>
    );
};

export default HomeItemNavbar;