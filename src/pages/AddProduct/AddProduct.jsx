import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = event =>{
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const brandName = form.brandName.value;
		const category = form.category.value;
		const rating = form.rating.value;
		const description = form.description.value;
		const price = form.price.value;
		const photo = form.photo.value;
		const newProduct = {
			name,
			brandName,
			category,
			rating,
			description,
			price,
			photo,
		};
		console.log(newProduct);

		// send data to the server
		fetch("http://localhost:5000/product", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newProduct),
		})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Product Added Succssfully",
                    icon: "success",
                    confirmButtonText: "Ok",
                });
            }
        });
	}

    return (
		<div className="p-7 md:p-16 lg:p-22">
			<h3 className="text-2xl text-indigo-600 text-center mb-6">
				Add a Product
			</h3>
			<form onSubmit={handleAddProduct}>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="">
						<label className="block mb-2 font-medium">Name</label>
						<input
							type="text"
							name="name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							placeholder="Enter product name"
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">
							Brand Name
						</label>
						<input
							type="text"
							name="brandName"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Enter brand name"
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">
							Category
						</label>
						<input
							type="text"
							name="category"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							placeholder="Enter category name"
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">Rating</label>
						<input
							type="text"
							name="rating"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							placeholder="Enter rating"
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
							placeholder="Enter short description"
						/>
					</div>
					<div className="">
						<label className="block mb-2 font-medium">Price</label>
						<input
							type="number"
							name="price"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							placeholder="Enter product price"
						/>
					</div>
					<div className="md:col-span-2">
						<label className="block mb-2 font-medium">Photo</label>
						<input
							type="text"
							name="photo"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
							placeholder="Enter photo URL"
						/>
					</div>
				</div>
				<input
					type="submit"
					className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 md:hover:from-pink-500 md:hover:to-orange-500 dark:text-white text-white mt-4 focus:ring-2 focus:outline-none md:focus:ring-orange-600 font-medium w-full px-5 py-2.5 text-center cursor-pointer"
					value="Add Product"
				/>
			</form>
		</div>
	);
};

export default AddProduct;