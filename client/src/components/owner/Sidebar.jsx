import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";

const Sidebar = () => {
	const [user, setUser] = useState(dummyUserData);
	const location = useLocation();
	const [image, setImage] = useState(null);

	const updateImage = async () => {
		if (image) {
			const imageUrl = URL.createObjectURL(image);
			setUser((prevUser) => ({
				...prevUser,
				image: imageUrl,
			}));
			setImage(null);
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
		}
	};

	return (
		<div className="relative min-h-screen w-full max-w-13 border-borderColor border-r pt-8 text-sm md:flex md:max-w-60 md:flex-col md:items-center">
			{/* Profile Image Section */}
			<div className="group relative">
				<label className="cursor-pointer" htmlFor="image">
					<img
						alt=""
						className="mx-auto h-9 w-9 rounded-full md:h-14 md:w-14"
						src={
							user.image ||
							"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
						}
					/>
					<input
						accept="image/*"
						hidden
						id="image"
						onChange={handleImageChange}
						type="file"
					/>
					<div className="absolute top-0 right-0 bottom-0 left-0 hidden items-center justify-center rounded-full bg-black/10 group-hover:flex">
						<img alt="Edit" className="h-4 w-4" src={assets.edit_icon} />
					</div>
				</label>
			</div>

			{/* Save Button */}
			{image && (
				<button
					className="absolute top-0 right-0 flex cursor-pointer gap-1 bg-primary/10 p-2 text-primary"
					onClick={updateImage}
					type="button"
				>
					Save <img alt="" src={assets.check_icon} width={13} />
				</button>
			)}

			{/* User Name */}
			<p className="mt-2 text-base max-md:hidden">{user.name}</p>

			{/* Navigation Menu */}
			<div className="w-full">
				{ownerMenuLinks.map((link) => (
					<NavLink
						className={`relative flex w-full items-center gap-2 py-3 pl-4 first:mt-6 ${
							link.path === location.pathname
								? "bg-primary/10 text-primary"
								: "text-gray-600"
						}`}
						key={link.path}
						to={link.path}
					>
						<img
							alt={link.name}
							src={
								link.path === location.pathname ? link.coloredIcon : link.icon
							}
						/>

						<span className="max-md:hidden">{link.name}</span>

						<div
							className={`${
								link.path === location.pathname && "bg-primary"
							} absolute right-0 h-8 w-1.5 rounded-l`}
						></div>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
