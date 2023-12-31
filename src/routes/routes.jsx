import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MainLayout from "../layouts/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import Error from "../pages/Error/Error";
import BrandDetails from "../pages/Home/BrandCard/BrandDetails/BrandDetails";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";


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
				loader: () => fetch(`https://autobuzz-server.vercel.app/products`),
			},
			{
				path: "/products/:id",
				element: (
					<PrivateRoute>
						<ProductDetails></ProductDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://autobuzz-server.vercel.app/products/${params.id}`),
			},
			{
				path: "/update-products/:id",
				element: (
					<PrivateRoute>
						<UpdateProduct></UpdateProduct>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://autobuzz-server.vercel.app/products/${params.id}`),
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
				loader: () => fetch(`https://autobuzz-server.vercel.app/cart`),
			},
		],
	},
]);

export default router;