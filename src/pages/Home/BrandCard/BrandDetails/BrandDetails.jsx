import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {

    const brandName = useParams().name;
    console.log(brandName);
    const fetchedProducts = useLoaderData().filter(item => item.brandName == brandName);
    console.log(fetchedProducts.length);

    return (
		<div className="min-h-screen flex flex-wrap justify-center items-center pt-20 gap-5">
			{fetchedProducts.length > 0 ? (
				fetchedProducts.map((product) => (
					<div
						key={product._id}
						className="card w-96 bg-base-100 shadow-xl"
					>
						<figure>
							<img src={product?.image} alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{product?.name}
								<div className="badge badge-secondary">NEW</div>
							</h2>
							<p>
								If a dog chews shoes whose shoes does he choose?
							</p>
							<div className="card-actions justify-end">
								<div className="badge badge-outline">
									Fashion
								</div>
								<div className="badge badge-outline">
									Products
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="text-2xl">No Car Available</div>
			)}
		</div>
	);
};

export default BrandDetails;