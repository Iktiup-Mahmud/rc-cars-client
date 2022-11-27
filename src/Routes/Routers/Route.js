import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/Authentication/Login/Login";
import SignUp from "../../components/Authentication/SignUp/SignUp";
import Categories from "../../components/Pages/Categories/Categories";
import Category from "../../components/Pages/Category/Category";
import AddProduct from "../../components/Pages/Dashboard/AddProduct/AddProduct";
import MyBookings from "../../components/Pages/Dashboard/MyBookings/MyBookings";
import MyProducts from "../../components/Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../components/Pages/Home/Home/Home";
import Page404 from "../../components/Shared/page404/Page404";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


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
                path: '/blog',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:name',
                element: <PrivetRoute><Category></Category></PrivetRoute>,
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
        path: '/dashboard',
        element: <PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/mybookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])