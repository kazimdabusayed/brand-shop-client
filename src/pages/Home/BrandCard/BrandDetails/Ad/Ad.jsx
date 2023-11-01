
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Ad = () => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			<SwiperSlide>
				<img
					src="https://i.postimg.cc/7Y3Q8tdF/rolls-royce-ghost.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://i.postimg.cc/QC5TnNsR/05-1400x700-side-profile-gt-24.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://i.postimg.cc/NfY6YhN8/bmw-i7.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://i.postimg.cc/wMcm4drj/Phantom-II-Commission-Hero-Single-Twin-Card-min.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Ad;
