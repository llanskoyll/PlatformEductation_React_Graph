import React, {useContext,  useState} from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import './Login.css'
import {AuthContext} from "../../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)


    const [loginInput, setLoginInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const user = {id: "8200464", password: "8200464"}
    const login = event => {
        event.preventDefault()
        if ((loginInput === user.id) && (passwordInput === user.password)) {
            setIsAuth(true)
            localStorage.setItem('auth', true)
        } else {
                alert("Вы ввели неверный логин или пароль")
        }
    }
    return (
        <div className="login">
            <div className="login__inner">
                <Form onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="text" placeholder="Введите логин"
                                      onChange={event => setLoginInput(event.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"
                                      onChange={event => setPasswordInput(event.target.value)}/>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Войти
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;