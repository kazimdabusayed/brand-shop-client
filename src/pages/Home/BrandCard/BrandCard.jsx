import PropTypes from "prop-types";

const BrandCard = ({ brands }) => {
	const { id, name, image } = brands;
	return (
		<div className="max-w-sm border rounded-lg shadow-xl ">
			<img
				className="rounded-t-lg h-[330px] w-full"
				src={image}
				alt="Brand logo"
			/>
			<div className="p-5">
				<a
					href="#"
					className="inline-flex items-center px-3 w-full py-2 text-sm font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-400 bg-blue-500 text-white  hover:bg-blue-600 transition duration-300 ease-in-out"
				>
					See {name}
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
    )
};

export default BrandCard;

BrandCard.propTypes = {
	brands: PropTypes.node,
};
