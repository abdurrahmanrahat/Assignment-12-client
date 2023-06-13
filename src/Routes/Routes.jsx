import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddaClass from "../Pages/Dashboard/AddaClass/AddaClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Classes from "../Pages/Classes/Classes";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // Admin Route
            {
                path: 'manageclasses',
                element: <PrivateRoute><ManageClasses></ManageClasses></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/approvedClasses')
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            // Instructor Route
            {
                path: 'addaclass',
                element: <AddaClass></AddaClass>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            // Student Route
            {
                path: 'myselectedclass',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myenrolledclass',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            }
        ]
    }
]);

export default router;