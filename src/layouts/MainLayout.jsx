import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber/Navber";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
    return (
		<>
			<div className="">
				<Navber></Navber>
				<Outlet></Outlet>
			</div>
            <Footer></Footer>
		</>
	);
};

export default MainLayout;