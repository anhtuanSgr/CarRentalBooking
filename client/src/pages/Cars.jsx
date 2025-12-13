import { useState } from "react";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "../components/CarCard";
import Title from "../components/Title";

/**
 * Component Cars - Trang hiển thị danh sách xe có sẵn
 * Bao gồm tính năng tìm kiếm và lọc xe
 * @returns {JSX.Element} Trang danh sách xe với thanh tìm kiếm và lưới xe
 */
const Cars = () => {
	// State quản lý giá trị tìm kiếm
	const [searchQuery, setSearchQuery] = useState("");

	// State quản lý danh sách xe (hiện tại dùng dữ liệu mẫu)
	const [cars] = useState(dummyCarData);

	// Lọc xe theo từ khóa tìm kiếm
	const filteredCars = cars.filter((car) => {
		const searchLower = searchQuery.toLowerCase();
		return (
			car.brand.toLowerCase().includes(searchLower) ||
			car.model.toLowerCase().includes(searchLower) ||
			car.category.toLowerCase().includes(searchLower) ||
			car.fuel_type.toLowerCase().includes(searchLower) ||
			car.transmission.toLowerCase().includes(searchLower) ||
			car.location.toLowerCase().includes(searchLower)
		);
	});

	return (
		<div>
			{/* Container chính với padding dọc và nền sáng */}
			<div
				className="flex flex-col items-center bg-light py-20 max-md:px-4"
				style={{ opacity: 1, transform: "none" }}
			>
				{/* Tiêu đề trang */}
				<Title
					description="Khám phá bộ sưu tập xe cao cấp của chúng tôi cho chuyến phiêu lưu tiếp theo của bạn"
					title="Xe Có Sẵn"
				/>

				{/* Thanh tìm kiếm với icon search và filter */}
				<div
					className="mt-6 flex h-12 w-full max-w-140 items-center rounded-full bg-white px-4 shadow"
					style={{ opacity: 1, transform: "none" }}
				>
					{/* Icon tìm kiếm */}
					<img alt="" className="mr-2 h-4.5 w-4.5" src={assets.search_icon} />

					{/* Input tìm kiếm */}
					<input
						className="h-full w-full text-gray-500 outline-none"
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Tìm theo hãng, mẫu xe, địa điểm hoặc tính năng"
						type="text"
						value={searchQuery}
					/>

					{/* Icon filter */}
					<img
						alt=""
						className="ml-2 h-4.5 w-4.5 cursor-pointer"
						src={assets.filter_icon}
					/>
				</div>
			</div>

			{/* Container danh sách xe */}
			<div
				className="mt-10 px-6 md:px-16 lg:px-24 xl:px-32"
				style={{ opacity: 1 }}
			>
				{/* Hiển thị số lượng xe */}
				<p className="mx-auto max-w-7xl text-gray-500 xl:px-20">
					Hiển thị {filteredCars.length} xe
				</p>

				{/* Lưới hiển thị các thẻ xe */}
				<div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:px-20">
					{filteredCars.map((car) => (
						<div key={car._id} style={{ opacity: 1, transform: "none" }}>
							<CarCard car={car} />
						</div>
					))}
				</div>

				{/* Hiển thị thông báo khi không tìm thấy xe */}
				{filteredCars.length === 0 && (
					<div className="mx-auto max-w-7xl py-20 text-center xl:px-20">
						<p className="text-gray-500 text-lg">
							Không tìm thấy xe nào phù hợp với tìm kiếm của bạn
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cars;
