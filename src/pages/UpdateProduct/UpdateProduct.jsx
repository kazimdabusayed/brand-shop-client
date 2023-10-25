import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    
    const product = useLoaderData();
    const { _id, name, brandName, type, rating, description, price, photo } =
		product;

    const handleUpdateProduct = (event) =>{
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const brandName = form.brandName.value;
		const type = form.type.value;
		const rating = form.rating.value;
		const description = form.description.value;
		const price = form.price.value;
		const photo = form.photo.value;
		const updatedProduct = {
			name,
			brandName,
			type,
			rating,
			description,
			price,
			photo,
		};
		console.log(updatedProduct);

		// send data to the server
		fetch(``, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "Product Updated Succssfully",
						icon: "success",
						confirmButtonText: "Ok",
					});
				}
			});
	}

    return (
		<div className="p-7 md:p-16 lg:p-22">
			<h3 className="text-2xl text-indigo-600 text-center mb-6">
				Update a Product
			</h3>
			<form onSubmit={handleUpdateProduct}>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="">
						<label className="block mb-2 font-medium">Name</label>
						<input
							type="text"
							name="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							defaultValue={name}
						/>
					</div>
					<div className="">
						<label
							htmlFor="brandName"
							className="block mb-2 font-medium"
						>
							Select an option
						</label>
						<select
							id="brandName"
							name="brandName"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            defaultValue={brandName}
						>
							<option selected>Choose a brand</option>
							<option>BMW</option>
							<option>Mercedes-Benz</option>
							<option>Tesla</option>
							<option>Aston Martin</option>
							<option>Bentley</option>
							<option>Rolls Royce</option>
						</select>
					</div>
					<div className="">
						<label
							htmlFor="type"
							className="block mb-2 font-medium"
						>
							Select an option
						</label>
						<select
							id="type"
							name="type"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            defaultValue={type}
						>
							<option selected>Choose a type</option>
							<option>Sedan</option>
							<option>SUV</option>
							<option>Convertible</option>
							<option>Coupe</option>
							<option>Crossover</option>
							<option>MVP</option>
						</select>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">Rating</label>
						{/* <Rating name="rating"></Rating> */}
						<input
							type="text"
							name="rating"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							defaultValue={rating}
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">
							Short Description
						</label>
						<input
							type="text"
							name="description"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							defaultValue={description}
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">Price</label>
						<input
							type="number"
							name="price"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							defaultValue={price}
						/>
					</div>
					<div className="md:col-span-2">
						<label className="block mb-2 font-medium">Photo</label>
						<input
							type="text"
							name="photo"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							defaultValue={photo}
						/>
					</div>
				</div>
				<input
					type="submit"
					className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 md:hover:from-pink-500 md:hover:to-orange-500 dark:text-white text-white mt-4 focus:ring-2 focus:outline-none md:focus:ring-orange-600 font-medium w-full px-5 py-2.5 text-center cursor-pointer"
					value="Update Product"
				/>
			</form>
		</div>
	);
};

export default UpdateProduct;