import { Link } from "react-router-dom";
import { assets, dummyUserData } from "../../assets/assets";

const NavbarOwner = () => {
	return (
		<div className="relative flex items-center justify-between border-borderColor border-b px-6 py-4 text-gray-500 transition-all md:px-10">
			<Link data-discover="true" to="/">
				<img alt="" className="h-7" src={assets.logo} />
			</Link>
			<p>Xin chào, {dummyUserData.name || "Chủ xe"}</p>
		</div>
	);
};

export default NavbarOwner;
