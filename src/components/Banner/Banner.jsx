

const Banner = () => {
    return (
		<div
			className="relative bg-cover bg-center h-screen flex items-center blurLoad" 
			style={{ backgroundImage: 'url("https://i.postimg.cc/SNcDtb7X/night-bg.jpg")' }}
		>
			<div className=" bg-opacity-60 absolute inset-0"></div>
			<div className="container mx-auto text-center relative z-10">
				<h1 className="text-5xl font-bold text-white leading-tight mb-4">
					Welcome to Our Automotive Website
				</h1>
				<p className="text-xl text-white mb-8">
					Discover the latest in automotive technology and trends.
				</p>
				<a
					href="#"
					className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full hover:bg-orange-600 transition duration-300 ease-in-out"
				>
					Explore Now
				</a>
			</div>
		</div>
	);
};

export default Banner;