import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";

/**
 * Component Navbar - Thanh điều hướng chính của ứng dụng
 * @param {Function} onShowLogin - Hàm callback để hiển thị modal đăng nhập
 * @returns {JSX.Element} Thanh điều hướng với menu, tìm kiếm và các nút hành động
 */
const Navbar = ({ onShowLogin }) => {
	// Hook lấy thông tin đường dẫn hiện tại để áp dụng style phù hợp
	const currentLocation = useLocation();

	// State quản lý trạng thái mở/đóng menu trên mobile
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Hook điều hướng đến các trang khác
	const navigate = useNavigate();

	return (
		<div
			className={`relative flex items-center justify-between border-borderColor border-b px-6 py-4 text-gray-600 transition-all md:px-16 lg:px-24 xl:px-32 ${
				// Nếu đang ở trang chủ thì thêm background màu light
				currentLocation.pathname === "/" && "bg-light"
			}`}
		>
			{/* Logo của website, click vào sẽ về trang chủ */}
			<Link to="/">
				<img alt="Logo" className="h-8" src={assets.logo} />
			</Link>

			{/* Container chứa menu điều hướng, thanh tìm kiếm và các nút hành động */}
			<div
				className={`right-0 z-50 flex flex-col items-start gap-4 border-borderColor transition-all duration-300 max-sm:fixed max-sm:top-16 max-sm:flex max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:p-4 sm:flex-row sm:items-center sm:gap-8 ${
					// Đổi màu nền theo trang hiện tại
					currentLocation.pathname === "/" ? "bg-light" : "bg-white"
				} ${isMenuOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
			>
				{/* Render danh sách các link menu từ file assets */}
				{menuLinks.map((menuItem) => (
					<Link key={menuItem.path} to={menuItem.path}>
						{menuItem.name}
					</Link>
				))}

				{/* Thanh tìm kiếm, chỉ hiển thị trên màn hình lớn (lg trở lên) */}
				<div className="hidden max-w-56 items-center gap-2 rounded-full border border-borderColor px-3 text-sm lg:flex">
					<input
						className="w-full bg-transparent py-1.5 placeholder-gray-500 outline-none"
						placeholder="Tìm kiếm xe"
						type="text"
					/>
					<img alt="tìm kiếm" src={assets.search_icon} />
				</div>

				{/* Container chứa các nút hành động: Bảng điều khiển và Đăng nhập */}
				<div className="flex items-start gap-6 max-sm:flex-col sm:items-center">
					{/* Nút chuyển đến trang bảng điều khiển cho chủ xe */}
					<button
						className="cursor-pointer transition-colors hover:text-primary"
						onClick={() => navigate("/owner")}
						type="button"
					>
						Bảng điều khiển
					</button>

					{/* Nút đăng nhập, khi click sẽ hiển thị modal đăng nhập */}
					<button
						className="cursor-pointer rounded-lg bg-primary px-8 py-2 text-white transition-all hover:bg-primary-dull"
						onClick={() => onShowLogin(true)}
						type="button"
					>
						Đăng nhập
					</button>
				</div>
			</div>

			{/* Nút menu hamburger, chỉ hiển thị trên mobile (sm trở xuống) */}
			{/* Khi click sẽ toggle trạng thái mở/đóng menu */}
			<button
				aria-label="menu"
				className="cursor-pointer sm:hidden"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				type="button"
			>
				{/* Hiển thị icon đóng nếu menu đang mở, icon menu nếu đang đóng */}
				<img
					alt="menu"
					src={isMenuOpen ? assets.close_icon : assets.menu_icon}
				/>
			</button>
		</div>
	);
};

export default Navbar;
