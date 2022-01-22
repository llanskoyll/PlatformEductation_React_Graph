import React, {useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Approuter from "./Components/Approuter";
import {AuthContext} from "./context/context";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    const [isAuth, setIsAuth] = useState(true)

    useEffect( () => {
       if(localStorage.getItem('auth')) {
           setIsAuth(true)
       }
    },[])
    return (
        <AuthContext.Provider value = {{
            isAuth,
            setIsAuth
        }}>
        <BrowserRouter>
            <Approuter/>
        </BrowserRouter>
        </AuthContext.Provider>
    );
});

export default App;


