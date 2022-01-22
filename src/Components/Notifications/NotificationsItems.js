import React from 'react';
import {useNotifications} from "../../hooks/hooks";
import classes from './Notifications.module.css'


const NotificationsItems = () => {
    const notifications = useNotifications()
    const currentArray = []
    const ObjRouterToArray = (notifications) => {
        for (let index = 0; index < notifications?.length; index++) {
            currentArray.push(notifications[index])
        }
    }
    ObjRouterToArray(notifications)
    return (
        <div>
            {currentArray.map((item) =>
                <div className={classes.notificationsLink} key = {item.id}>
                <a href = {item?.link}>
                    <div className = {classes.notificationsLinkTitle}>{item?.title}</div>
                    <div className = {classes.notificationsLinkMessage}>{item?.message}</div>
                </a>
                </div>
            )}
        </div>
    );
};

export default NotificationsItems;
