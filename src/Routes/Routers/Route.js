import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import SignUp from "../../components/Authentication/SignUp/SignUp";
import Categories from "../../components/Pages/Categories/Categories";
import Category from "../../components/Pages/Category/Category";
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
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:name',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`${process.env.REACT_APP_server_url}/categories/${params.name}`)
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