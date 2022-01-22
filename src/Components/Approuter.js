import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privatRoutes} from "../router";
import Navibar from "./UI/navbar/Navibar";
import {AuthContext} from "../context/context";

const Approuter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        isAuth
            ?
            <>
            <Navibar/>
            <Switch>
                {privatRoutes.map((route,index) =>
                    <Route component = {route.component} path = {route.path} exact = {route.exact} key = {index}/>
                )}
                <Redirect to = '/home' />
            </Switch>
            </>
            :
            <Switch>
                {publicRoutes.map((route,index) =>
                    <Route component = {route.component} path = {route.path} exact = {route.exact} key = {index}/>
                )}
                <Redirect to = '/login' />
            </Switch>
    );
};

export default Approuter;
//
// <Route exact path = "/" component = {Home} />
// <Route path = "/user" component = {User} />
// <Route path = "/student" component = {Student} />
// <Redirect to = "/" />