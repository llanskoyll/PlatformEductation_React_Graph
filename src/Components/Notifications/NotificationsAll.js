import React from 'react';
import {useNotifications} from "../../hooks/hooks";
import {Col, Container, Row, Table} from "react-bootstrap";
import classes from './Notifications.module.css'

const NotificationsAll = () => {
    const notifications = useNotifications()
    const currentArray = []
    const ObjRouterToArray = (notifications) => {
        for (let index = 0; index < notifications?.length; index++) {
            currentArray.push(notifications[index])
        }
    }
    ObjRouterToArray(notifications)
    console.log(currentArray)
    return (
        <Container className={classes.NotificationsAll}>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Сообщение</th>
                        <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                        {currentArray.map((item) =>
                            <tr key = {item.id}>
                                <td className= {classes.notificationsAllLinkMessage}>
                                    <a href = {item.link}>
                                        {item.title}
                                    </a>
                                </td>
                                <td className= {classes.notificationsAllLinkMessage}>
                                    <a href = {item.link}>
                                        {item.message}
                                    </a>
                                </td>
                                <td className= {classes.notificationsAllLinkMessage}>
                                    <a href = {item.link}>
                                        {item.id}
                                    </a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

        </Container>
    );
};

export default NotificationsAll;

// className = {classes.NotificationsAllItem}