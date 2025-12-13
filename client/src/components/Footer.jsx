/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * Component Footer - Hiển thị footer của website
 * @returns {JSX.Element} Footer với logo, mô tả, menu và thông tin liên hệ
 */
const Footer = () => {
	return (
		// Container chính của footer với padding responsive
		<div className="mt-60 px-6 text-gray-500 text-sm md:px-16 lg:px-24 xl:px-32">
			{/* Phần nội dung chính của footer */}
			<div className="flex flex-wrap items-start justify-between gap-8 border-gray-300 border-b pb-6">
				{/* Phần logo và mô tả công ty */}
				<div>
					{/* Logo công ty */}
					<img alt="logo" className="h-8 md:h-9" src={assets.logo} />

					{/* Mô tả ngắn về dịch vụ */}
					<p className="mt-3 max-w-80">
						Dịch vụ cho thuê xe cao cấp với nhiều lựa chọn xe sang trọng và phổ
						thông cho mọi nhu cầu lái xe của bạn.
					</p>

					{/* Các icon mạng xã hội */}
					<div className="mt-6 flex items-center gap-3">
						{/* Link Facebook */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							<img
								alt="Facebook"
								className="h-5 w-5"
								src={assets.facebook_logo}
							/>
						</a>

						{/* Link Instagram */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							<img
								alt="Instagram"
								className="h-5 w-5"
								src={assets.instagram_logo}
							/>
						</a>

						{/* Link Twitter */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							<img
								alt="Twitter"
								className="h-5 w-5"
								src={assets.twitter_logo}
							/>
						</a>

						{/* Link Email */}
						<a href="#" onClick={(e) => e.preventDefault()}>
							<img alt="Email" className="h-5 w-5" src={assets.gmail_logo} />
						</a>
					</div>
				</div>

				{/* Phần các cột menu */}
				<div className="flex w-1/2 flex-wrap justify-between gap-8">
					{/* Cột Quick Links - Các liên kết nhanh đến các trang chính */}
					<div>
						<h2 className="font-medium text-base text-gray-800 uppercase">
							Liên kết nhanh
						</h2>
						<ul className="mt-3 flex flex-col gap-1.5">
							<li>
								<Link to="/">Trang chủ</Link>
							</li>
							<li>
								<Link to="/cars">Xe có sẵn</Link>
							</li>
							<li>
								<Link to="/my-bookings">Đặt xe của tôi</Link>
							</li>
							<li>
								<a href="#" onClick={(e) => e.preventDefault()}>
									Về chúng tôi
								</a>
							</li>
						</ul>
					</div>

					{/* Cột Resources - Các tài nguyên và chính sách */}
					<div>
						<h2 className="font-medium text-base text-gray-800 uppercase">
							Tài nguyên
						</h2>
						<ul className="mt-3 flex flex-col gap-1.5">
							<li>
								<a href="#" onClick={(e) => e.preventDefault()}>
									Trung tâm trợ giúp
								</a>
							</li>
							<li>
								<a href="#" onClick={(e) => e.preventDefault()}>
									Điều khoản dịch vụ
								</a>
							</li>
							<li>
								<a href="#" onClick={(e) => e.preventDefault()}>
									Chính sách bảo mật
								</a>
							</li>
							<li>
								<a href="#" onClick={(e) => e.preventDefault()}>
									Bảo hiểm
								</a>
							</li>
						</ul>
					</div>

					{/* Cột Contact - Thông tin liên hệ */}
					<div>
						<h2 className="font-medium text-base text-gray-800 uppercase">
							Liên hệ
						</h2>
						<ul className="mt-3 flex flex-col gap-1.5">
							{/* Địa chỉ */}
							<li>123 Đường Láng</li>
							<li>Hà Nội, Việt Nam</li>

							{/* Số điện thoại */}
							<li>+84 123 456 789</li>

							{/* Email */}
							<li>info@carrental.com</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Phần copyright và links phụ */}
			<div className="flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
				{/* Thông tin bản quyền với năm hiện tại */}
				<p>© {new Date().getFullYear()} CarRental. Đã đăng ký bản quyền.</p>

				{/* Các liên kết phụ */}
				<ul className="flex items-center gap-4">
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Bảo mật
						</a>
					</li>
					<li>|</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Điều khoản
						</a>
					</li>
					<li>|</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Cookies
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
