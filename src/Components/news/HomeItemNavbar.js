import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "../UI/navbar/Navibar.module.css";

const HomeItemNavbar = () => {
    return (
        <div>
            <Nav className="me-auto">
                <Nav.Link>
                    <Link to='/home' className={classes.linksItem}>
                        Главная
                    </Link>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default HomeItemNavbar;