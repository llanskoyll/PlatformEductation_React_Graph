import React from 'react';
import {Nav} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";
import NotificationsItems from "./NotificationsItems";
import {Link} from "react-router-dom";

const NavibarNotifications = () => {
    return (
        <NavDropdown title="Уведомления" id="navbarScrollingDropdown">
            <NotificationsItems/>
            <NavDropdown.Divider />
            <NavDropdown.Item>
                <Nav.Link><Link to='/notificationsAll' style = {{color: '#000', textDecoration: 'none'}}>Отобразить все</Link></Nav.Link>
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default NavibarNotifications;