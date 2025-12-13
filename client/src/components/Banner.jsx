import { assets } from "../assets/assets";

/**
 * Component Banner - Hiển thị banner quảng cáo cho chủ xe
 * @returns {JSX.Element} Banner với nội dung khuyến khích chủ xe đăng ký
 */
const Banner = () => {
	return (
		// Container chính với gradient xanh dương, responsive layout
		<div className="mx-3 flex max-w-6xl flex-col items-center justify-between overflow-hidden rounded-2xl bg-linear-to-r from-[#0558FE] to-[#A9CFFF] px-8 pt-10 md:mx-auto md:flex-row md:items-start md:pl-14">
			{/* Nội dung văn bản */}
			<div className="text-white">
				{/* Tiêu đề chính */}
				<h2 className="font-medium text-3xl">Bạn có sở hữu xe sang?</h2>

				{/* Mô tả ngắn về dịch vụ */}
				<p className="mt-2">
					Kiếm tiền từ xe của bạn một cách dễ dàng bằng cách đăng ký trên
					CarRental.
				</p>

				{/* Mô tả chi tiết về lợi ích */}
				<p className="max-w-130">
					Chúng tôi lo tất cả về bảo hiểm, xác minh tài xế và thanh toán an toàn
					— để bạn có thể kiếm thu nhập thụ động mà không lo lắng.
				</p>

				{/* Nút call-to-action để đăng ký xe */}
				<button
					className="mt-4 mb-10 cursor-pointer rounded-lg bg-white px-6 py-2 text-primary text-sm transition-all hover:bg-slate-100 md:mb-0"
					tabIndex="0"
					type="button"
				>
					Đăng ký xe của bạn
				</button>
			</div>

			{/* Hình ảnh xe minh họa */}
			<img alt="car" className="mt-10 max-h-45" src={assets.banner_car_image} />
		</div>
	);
};

export default Banner;
