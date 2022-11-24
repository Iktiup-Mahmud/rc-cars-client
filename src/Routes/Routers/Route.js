import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import SignUp from "../../components/Authentication/SignUp/SignUp";
import Home from "../../components/Pages/Home/Home/Home";
import Page404 from "../../components/Shared/page404/Page404";
import Main from "../../layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])