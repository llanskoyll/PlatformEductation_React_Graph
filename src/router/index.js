import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import Student from "../pages/Student/Student";
import Login from "../pages/Login/Login";
import HomeItemNews from "../pages/News/HomeItemsNews"
import Notifications from "../pages/Notifications/Notifications";
import NotificationsAll from "../Components/Notifications/NotificationsAll";

export const privatRoutes = [
    {path: '/home', component: Home, exact: true},
    {path: '/home/:id', component: HomeItemNews, exact: true},
    {path: '/user', component: User, exact: true},
    {path: '/student', component: Student, exact: true},
    {path: '/notifications/:id', component: Notifications, exact: true},
    {path: '/notificationsAll', component: NotificationsAll, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},

]