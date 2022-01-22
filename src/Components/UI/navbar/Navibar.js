import React, {useContext} from 'react'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom'
import classes from './Navibar.module.css'
import {useUser} from "../../../hooks/hooks";
import {AuthContext} from "../../../context/context";
import UnderNavibar from "./UnderNavibar";

const Navibar = () => {
    const user = useUser();
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link><Link to='/home'
                                                  className={classes.links}>Главная</Link></Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/user' className={classes.links}>Профиль</Link></Nav.Link>
                            <Nav.Link><Link to='/student' className={classes.links}>Обучение</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="link" className = {classes.btn} onClick = {logout}>Выход</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <UnderNavibar/>
        </>
    )
}

export default Navibar