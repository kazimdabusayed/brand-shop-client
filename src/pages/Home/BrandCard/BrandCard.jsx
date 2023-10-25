import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brands }) => {
	const { id, name, image } = brands;
	return (
		<div className="relative overflow-hidden rounded-lg border select-none hover:shadow hover:shadow-teal-200 p-2">
			<img
				className="rounded-t-lg h-[330px] w-full"
				src={image}
				alt="Brand logo"
			/>
			<div className="p-4">
				<Link
					to={`brands/${name}`}
					className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700 items-center w-full text-center focus:ring-4 focus:outline-none focus:ring-pink-500 transition duration-300 ease-in-out"
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
				</Link>
			</div>
		</div>
	);
};

export default BrandCard;

BrandCard.propTypes = {
	brands: PropTypes.node,
};
