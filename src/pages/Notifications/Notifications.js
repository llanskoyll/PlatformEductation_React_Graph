import React, {useState} from 'react';
import {useNotifications} from "../../hooks/hooks";
import {useHistory} from "react-router-dom";
import {Container} from "react-bootstrap";
import HomeItemNavbar from "../../Components/Notifications/NotificationsItemNavbar";

const Notifications = () => {

    const notifications = useNotifications()
    const router = useHistory()
    const path = router.location.pathname.split(`/`)
    const currentArray = path[path.length - 1]
    const notification = []
    const findNotifications = (notifications, currentArray, notification) => {
        for (let index = 0; index < notifications.length; index++) {
            if (notifications[index].id === currentArray) {
                for (let key in notifications[index]) {
                    notification.push(notifications[index][key])
                }
            }
        }
        console.log(notification)
        return notification;
    }
    findNotifications(notifications, currentArray, notification)


    return (
        <div className="notification">
            <Container>
                <div className="notification inner">
                    <div className="notificationHead">
                        <div className="notificationPath">
                            <HomeItemNavbar/>
                        </div>
                        <div className="notificationTitle">
                            <h2>{notification[2]}</h2>
                        </div>
                    </div>
                    <div className="notificationBody">
                        <p>{notification[3]}</p>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Notifications;