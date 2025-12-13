import { useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";

/**
 * Component MyBookings - Trang hiển thị danh sách đặt xe của người dùng
 * Cho phép xem và quản lý tất cả các đặt xe
 * @returns {JSX.Element} Trang danh sách đặt xe với thông tin chi tiết
 */
const MyBookings = () => {
	// State quản lý danh sách đặt xe (hiện tại dùng dữ liệu mẫu)
	const [bookings] = useState(dummyMyBookingsData);

	/**
	 * Format ngày tháng theo định dạng DD/MM/YYYY
	 * @param {string} dateString - Chuỗi ngày tháng cần format
	 * @returns {string} Chuỗi ngày tháng đã được format
	 */
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, "0");
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	/**
	 * Format giá tiền theo định dạng VNĐ
	 * @param {number} price - Giá tiền cần format
	 * @returns {string} Chuỗi giá tiền đã được format
	 */
	const formatPrice = (price) => {
		return new Intl.NumberFormat("vi-VN").format(price);
	};

	/**
	 * Lấy class CSS cho badge trạng thái
	 * @param {string} status - Trạng thái đặt xe
	 * @returns {string} Class CSS cho badge
	 */
	const getStatusBadgeClass = (status) => {
		switch (status) {
			case "đã xác nhận":
				return "bg-green-400/15 text-green-600";
			case "đang chờ":
				return "bg-red-400/15 text-red-600";
			default:
				return "bg-gray-400/15 text-gray-600";
		}
	};

	return (
		<div
			className="mx-auto mt-16 max-w-7xl px-6 text-sm md:px-16 lg:px-24 xl:px-32 2xl:px-48"
			style={{ opacity: 1, transform: "none" }}
		>
			{/* Tiêu đề trang với căn trái trên desktop */}
			<div style={{ opacity: 1, transform: "none" }}>
				<div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
					<h1 className="font-semibold text-4xl md:text-[40px]">
						Đặt Xe Của Tôi
					</h1>
					<p className="mt-2 max-w-156 text-gray-500/90 text-sm md:text-base">
						Xem và quản lý tất cả các đặt xe của bạn
					</p>
				</div>
			</div>

			{/* Container danh sách đặt xe */}
			<div>
				{bookings.map((booking, index) => (
					<div
						className={`grid grid-cols-1 gap-6 rounded-lg border border-borderColor p-6 md:grid-cols-4 ${
							index === 0 ? "mt-12" : "mt-5"
						}`}
						key={booking._id}
						style={{ opacity: 1, transform: "none" }}
					>
						{/* Cột 1: Hình ảnh và thông tin xe */}
						<div className="md:col-span-1">
							{/* Hình ảnh xe */}
							<div className="mb-3 overflow-hidden rounded-md">
								<img
									alt={`${booking.car.brand} ${booking.car.model}`}
									className="aspect-video h-auto w-full object-cover"
									src={booking.car.image}
								/>
							</div>

							{/* Tên xe */}
							<p className="mt-2 font-medium text-lg">
								{booking.car.brand} {booking.car.model}
							</p>

							{/* Thông tin xe: Năm • Loại • Vị trí */}
							<p className="text-gray-500">
								{booking.car.year} • {booking.car.category} •{" "}
								{booking.car.location}
							</p>
						</div>

						{/* Cột 2-3: Thông tin đặt xe */}
						<div className="md:col-span-2">
							{/* Header với ID đặt xe và trạng thái */}
							<div className="flex items-center gap-2">
								<p className="rounded bg-light px-3 py-1.5">
									Đặt xe #{index + 1}
								</p>
								<p
									className={`rounded-full px-3 py-1 text-xs ${getStatusBadgeClass(
										booking.status,
									)}`}
								>
									{booking.status}
								</p>
							</div>

							{/* Thời gian thuê xe */}
							<div className="mt-3 flex items-start gap-2">
								<img
									alt=""
									className="mt-1 h-4 w-4"
									src={assets.calendar_icon_colored}
								/>
								<div>
									<p className="text-gray-500">Thời gian thuê</p>
									<p>
										{formatDate(booking.pickupDate)} đến{" "}
										{formatDate(booking.returnDate)}
									</p>
								</div>
							</div>

							{/* Địa điểm nhận xe */}
							<div className="mt-3 flex items-start gap-2">
								<img
									alt=""
									className="mt-1 h-4 w-4"
									src={assets.location_icon_colored}
								/>
								<div>
									<p className="text-gray-500">Địa điểm nhận xe</p>
									<p>{booking.car.location}</p>
								</div>
							</div>
						</div>

						{/* Cột 4: Thông tin giá và ngày đặt */}
						<div className="flex flex-col justify-between gap-6 md:col-span-1">
							<div className="text-gray-500 text-sm md:text-right">
								<p>Tổng giá</p>
								<h1 className="font-semibold text-2xl text-primary">
									{formatPrice(booking.price)}₫
								</h1>
								<p>Đặt ngày {formatDate(booking.createdAt)}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Hiển thị thông báo khi không có đặt xe */}
			{bookings.length === 0 && (
				<div className="py-20 text-center">
					<p className="text-gray-500 text-lg">
						Bạn chưa có đặt xe nào. Hãy khám phá các xe có sẵn!
					</p>
				</div>
			)}
		</div>
	);
};

export default MyBookings;
