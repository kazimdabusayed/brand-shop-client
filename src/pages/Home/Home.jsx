import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "./BrandCard/BrandCard";
import Features from "./Features/Features";

const Home = () => {

    const brands = useLoaderData();

    return (
		<>
			<Banner></Banner>
			<div className="container mx-auto px-4 space-y-4 bg-slate-50 py-6 dark:bg-transparent md:py-7 lg:py-10">
				<div className="mx-auto flex max-w-[58rem] flex-col items-center mb-6 text-center">
					<h2 className="font-bold leading-[1.1] text-3xl md:text-5xl">
						Brand Collection
					</h2>
				</div>
				<div className="mx-auto grid justify-center gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:max-w-[72rem] p-2">
					{brands.map((oneBrand) => (
						<BrandCard
							key={oneBrand.id}
							brands={oneBrand}
						></BrandCard>
					))}
				</div>
			</div>
			<Features></Features>
		</>
	);
};

export default Home;