import PropTypes from "prop-types";

const BrandCard = ({ brands }) => {
	const { id, name, image } = brands;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure className="flex justify-center content-center">
				<img src={image} alt="" />
			</figure>
			<div className="card-body">
				<div className="w-full">
					<a href="">
						<button className="btn bg-blue-500 text-white hover:bg-blue-600 w-full">
							Details
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default BrandCard;

BrandCard.propTypes = {
	brands: PropTypes.node,
};
