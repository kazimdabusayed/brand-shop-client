import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct"
import MyCart from "../pages/MyCart/MyCart"


const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LogIn/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/addproduct",
                element: <AddProduct/>,
            },
            {
                path: "/cart",
                element: <MyCart/>,
            },
        ]
	},
]);

export default router;