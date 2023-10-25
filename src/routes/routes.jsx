import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct"
import MyCart from "../pages/MyCart/MyCart"
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../pages/Home/BrandCard/BrandDetails/BrandDetails";


const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("/data.json"),
			},
			{
				path: "/brands/:name",
				element: <BrandDetails></BrandDetails>,
				loader: () => fetch(`http://localhost:5000/product`),
			},
			{
				path: "/login",
				element: <LogIn />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/addproduct",
				element: (
					<PrivateRoute>
						<AddProduct />
					</PrivateRoute>
				),
			},
			{
				path: "/cart",
				element: (
					<PrivateRoute>
						<MyCart />
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;