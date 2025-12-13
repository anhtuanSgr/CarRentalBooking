import { useState } from "react";
import { assets, cityList } from "../assets/assets.js";

/**
 * Component Hero - Hiển thị phần hero section với form tìm kiếm xe
 * @returns {JSX.Element} Hero section với tiêu đề, form tìm kiếm và hình ảnh xe
 */
const Hero = () => {
	// Lấy ngày hôm nay để set min date cho date inputs
	const today = new Date().toISOString().split("T")[0];

	// State quản lý địa điểm nhận xe được chọn
	const [pickupLocation, setPickupLocation] = useState("");

	// State quản lý ngày nhận xe và ngày trả xe
	const [pickupDate, setPickupDate] = useState("");
	const [returnDate, setReturnDate] = useState("");

	// Handler cho form submit
	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate ngày trả xe phải sau ngày nhận xe
		if (
			pickupDate &&
			returnDate &&
			new Date(returnDate) <= new Date(pickupDate)
		) {
			alert("Ngày trả xe phải sau ngày nhận xe");
			return;
		}

		// Log dữ liệu form để debug
		console.log({
			pickupDate,
			pickupLocation,
			returnDate,
		});

		// TODO: Xử lý tìm kiếm xe
	};

	return (
		// Container chính với chiều cao full screen, layout dọc, căn giữa
		<div className="flex h-screen flex-col items-center justify-center gap-14 bg-light text-center">
			{/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
			<h1 className="font-semibold text-4xl md:text-5xl">Xe sang cho thuê</h1>

			{/* Form tìm kiếm xe - layout dọc trên mobile, ngang trên desktop */}
			<form
				className="flex w-full max-w-80 flex-col items-start justify-between rounded-lg bg-white p-6 shadow-[0px_8px_20px_rgba(0,0,0,0.1)] md:max-w-[800px] md:flex-row md:items-center md:rounded-full"
				onSubmit={handleSubmit}
			>
				{/* Container cho các input - responsive layout */}
				<div className="flex flex-col items-start gap-10 md:ml-8 md:flex-row md:items-center">
					{/* Select địa điểm nhận xe */}
					<div className="flex flex-col items-start gap-2">
						<select
							className="text-sm"
							onChange={(e) => setPickupLocation(e.target.value)}
							required
							value={pickupLocation}
						>
							{/* Option mặc định */}
							<option value="">Địa điểm nhận xe</option>

							{/* Render danh sách các thành phố từ cityList */}
							{cityList.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>

						{/* Hiển thị thông báo nếu chưa chọn địa điểm */}
						<p className="px-1 text-gray-500 text-sm">
							{pickupLocation ? "" : "Vui lòng chọn địa điểm"}
						</p>
					</div>

					{/* Input ngày nhận xe */}
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="pickup-date">Ngày nhận xe</label>
						<input
							className="text-gray-500 text-sm"
							id="pickup-date"
							min={today}
							onChange={(e) => setPickupDate(e.target.value)}
							required
							type="date" // Không cho chọn ngày trong quá khứ
							value={pickupDate}
						/>
					</div>

					{/* Input ngày trả xe */}
					<div className="flex flex-col items-start gap-2">
						<label htmlFor="return-date">Ngày trả xe</label>
						<input
							className="text-gray-500 text-sm"
							id="return-date"
							min={pickupDate || today}
							onChange={(e) => setReturnDate(e.target.value)}
							required
							type="date" // Không cho chọn ngày trước ngày nhận xe
							value={returnDate}
						/>
					</div>
				</div>

				{/* Nút tìm kiếm với icon và text */}
				<button
					className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-primary px-9 py-3 text-white transition-colors hover:bg-primary-dull max-sm:mt-4"
					type="submit"
				>
					{/* Icon tìm kiếm */}
					<img
						alt="tìm kiếm"
						className="brightness-300"
						height="16"
						src={assets.search_icon}
						width="16"
					/>
					Tìm kiếm
				</button>
			</form>

			{/* Hình ảnh xe chính - hiển thị ở cuối hero section */}
			<img alt="xe" className="max-h-74" src={assets.main_car} />
		</div>
	);
};

export default Hero;
