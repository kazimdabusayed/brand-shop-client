import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "./BrandCard/BrandCard";

const Home = () => {

    const brands = useLoaderData();

    return (
		<>
			<Banner></Banner>
			<div className="my-6">
				<h2 className="text-3xl font-bold text-center">
					Brand collection
				</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
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