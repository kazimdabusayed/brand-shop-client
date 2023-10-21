import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "./BrandCard/BrandCard";

const Home = () => {

    const brands = useLoaderData();

    return (
		<>
			<Banner></Banner>
			<div className="my-4">
				<h2 className="text-3xl font-bold text-center">
					Our event services
				</h2>
				<div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{brands.map((oneBrand) => (
						<BrandCard
							key={oneBrand.id}
							brands={oneBrand}
						></BrandCard>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;