import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {

	const { user, loading } = useContext(AuthContext);
	const cart = useLoaderData()?.filter(item => item?.email == user.email);
	const [cartItem, setCartItem] = useState(cart);
	let totalPrice = 0;
	cart.map(item => {
		totalPrice += parseInt(item.price);
	})

    const handleDeleteCartProduct = (_id) =>{
        Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://autobuzz-server.vercel.app/cart/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								"Deleted!",
								"Your car has been deleted.",
								"success"
							);
							//? remove the user from UI
							const remaing = cartItem.filter(
								(user) => user._id !== _id
							);
							setCartItem(remaing);
						}
					});
			}
		});
    }

    return (
		<section>
			{cartItem.length > 0 ? (
				<div className="py-10">
					<div className="mx-auto px-4 sm:px-6 lg:px-8">
						{/* <div className="flex items-center justify-center">
					<h1 className="text-2xl font-semibold">Your Cart</h1>
					</div> */}
						<div className="mx-auto mt-8 max-w-[58rem]">
							<div className="rounded-3xl bg-gray-500 shadow-lg">
								<div className="px-4 py-6 sm:px-8 sm:py-10">
									<div className="flow-root">
										{cartItem.map((item) => (
											<ul
												key={item._id}
												className="-my-8"
											>
												<li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
													<div className="shrink-0 relative">
														<span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
															1
														</span>
														<img
															className="h-24 w-24 max-w-full rounded-lg object-cover"
															src={item?.photo}
															alt=""
														/>
													</div>
													<div className="relative flex flex-1 flex-col justify-between">
														<div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
															<div className="pr-8 sm:pr-5">
																<p className="text-base font-semibold text-gray-900">
																	{item?.name}
																</p>
																<p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
																	{item?.type}
																</p>
															</div>

															<div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
																<p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
																	$
																	{
																		item?.price
																	}
																</p>
															</div>
														</div>

														<div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
															<button
																onClick={() =>
																	handleDeleteCartProduct(
																		item._id
																	)
																}
																type="button"
																className="flex rounded p-2 text-center transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
															>
																<svg
																	className="h-5 w-5"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth="2"
																		d="M6 18L18 6M6 6l12 12"
																		className=""
																	></path>
																</svg>
															</button>
														</div>
													</div>
												</li>
											</ul>
										))}
									</div>
									<hr className="mt-4" />
									<div className="mt-6 flex items-center justify-between">
										<p className="text-sm font-medium text-gray-900">
											Total
										</p>
										<p className="text-2xl font-semibold text-gray-900">
											<span className="text-xs font-normal text-gray-400">
												USD
											</span>{" "}
											{totalPrice}
										</p>
									</div>
									<div className="mt-6 text-center">
										<button
											type="button"
											className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
										>
											Place Order
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M13 7l5 5m0 0l-5 5m5-5H6"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="h-screen flex justify-center items-center">
					<h2 className="text-3xl p-6 md:p-3">
						No car has been added to cart
					</h2>
				</div>
			)}
		</section>
	);
};

export default MyCart;