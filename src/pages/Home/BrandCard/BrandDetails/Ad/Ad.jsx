
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
					src="../../../../../../public/rolls-royce-ghost.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="../../../../../../public/rrAD.jpg"
					alt=""
					className="w-screen"
				/>
			</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide>
		</Swiper>
	);
};

export default Ad;
