import React from 'react'
import userImg from "../../image/LogoMIET.jpg"
import {Container} from "react-bootstrap";
import './User.css'
import {useCheckemail, useGroup, useUser} from "../../hooks/hooks";
import Loading from "../../Components/UI/Loading/Loading";

const User = () => {
    const user = useUser();
    const status = useCheckemail();
    const group = useGroup();


    const buttonStatus = () => {
        if (status) {
            return (
                <span className="confirmed">
                    Потверджен
                </span>
            )
        } else {
            return (
                <span className="confirmedNot">
                    Не подтвержден
                </span>
            )
        }
    }
    return (
        <Container>
            <div className="userPage">
                <div className="userInfo">
                    <div className="userName">{user.last_name} {user.first_name} {user.middle_name}</div>
                </div>
                <div className="userMain">
                    <div className="userImgDiv">
                        <img src={userImg} alt="UserImage" className="UserImage"/>
                    </div>
                    <div className="userEmail">
                        <div className="userEmail__inner">
                            <div className="userId">Номер cтуденческого:
                                <span className="userPersonal"> {user.id}
                            </span></div>
                            <div className="userEmailCheck">Статус почты :
                                <span className="userButtonCheck"> {buttonStatus()}
                            </span></div>
                            <div className="userGroups">Группа :
                                <span className="userPersonal"> {group.name}
                            </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default User;
