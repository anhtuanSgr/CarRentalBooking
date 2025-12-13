// Import các icon và hình ảnh cho ứng dụng

import addIcon from "./addIcon.svg";
import addIconColored from "./addIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import banner_car_image from "./banner_car_image.png";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import car_icon from "./car_icon.svg";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import check_icon from "./check_icon.svg";
import close_icon from "./close_icon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import delete_icon from "./delete_icon.svg";
import edit_icon from "./edit_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import eye_icon from "./eye_icon.svg";
import facebook_logo from "./facebook_logo.svg";
import filter_icon from "./filter_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import gmail_logo from "./gmail_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import location_icon from "./location_icon.svg";
import location_icon_colored from "./location_icon_colored.svg";
import logo from "./logo.svg";
import main_car from "./main_car.png";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import star_icon from "./star_icon.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import tick_icon from "./tick_icon.svg";
import twitter_logo from "./twitter_logo.svg";
import upload_icon from "./upload_icon.svg";
import user_profile from "./user_profile.png";
import users_icon from "./users_icon.svg";

// Danh sách các thành phố có sẵn để thuê xe
export const cityList = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];

// Đối tượng chứa tất cả các tài nguyên (icon và hình ảnh) được sử dụng trong ứng dụng
export const assets = {
	addIcon,
	addIconColored,
	arrow_icon,
	banner_car_image,
	calendar_icon_colored,
	car_icon,
	car_image1,
	car_image2,
	car_image3,
	car_image4,
	carIcon,
	carIconColored,
	cautionIconColored,
	check_icon,
	close_icon,
	dashboardIcon,
	dashboardIconColored,
	delete_icon,
	edit_icon,
	eye_close_icon,
	eye_icon,
	facebook_logo,
	filter_icon,
	fuel_icon,
	gmail_logo,
	instagram_logo,
	listIcon,
	listIconColored,
	location_icon,
	location_icon_colored,
	logo,
	main_car,
	menu_icon,
	search_icon,
	star_icon,
	testimonial_image_1,
	testimonial_image_2,
	tick_icon,
	twitter_logo,
	upload_icon,
	user_profile,
	users_icon,
};

// Liên kết menu chính cho người dùng
export const menuLinks = [
	{ name: "Trang chủ", path: "/" },
	{ name: "Xe có sẵn", path: "/cars" },
	{ name: "Đặt xe của tôi", path: "/my-bookings" },
];

// Liên kết menu cho chủ xe
export const ownerMenuLinks = [
	{
		coloredIcon: dashboardIconColored,
		icon: dashboardIcon,
		name: "Bảng điều khiển",
		path: "/owner",
	},
	{
		coloredIcon: addIconColored,
		icon: addIcon,
		name: "Thêm xe",
		path: "/owner/add-car",
	},
	{
		coloredIcon: carIconColored,
		icon: carIcon,
		name: "Quản lý xe",
		path: "/owner/manage-cars",
	},
	{
		coloredIcon: listIconColored,
		icon: listIcon,
		name: "Quản lý đặt xe",
		path: "/owner/manage-bookings",
	},
];

// Dữ liệu người dùng mẫu để kiểm thử ứng dụng
export const dummyUserData = {
	_id: "6847f7cab3d8daecdb517095",
	email: "admin@example.com",
	image: user_profile,
	name: "GreatStack",
	role: "chủ xe", // Vai trò: chủ xe
};

// Dữ liệu xe mẫu để kiểm thử ứng dụng
export const dummyCarData = [
	{
		_id: "67ff5bc069c03d4e45f30b77",
		brand: "BMW", // Hãng xe
		category: "SUV", // Loại xe: SUV
		createdAt: "2025-04-16T07:26:56.215Z", // Thời gian tạo
		description:
			"BMW X5 là mẫu SUV hạng trung cao cấp được sản xuất bởi BMW. X5 ra mắt năm 1999 như mẫu SUV đầu tiên của BMW.", // Mô tả xe
		fuel_type: "Hybrid", // Loại nhiên liệu: Xăng lai (Hybrid)
		image: car_image1, // Hình ảnh xe
		isAvailable: true, // Có sẵn để thuê
		location: "Hà Nội", // Vị trí: Hà Nội
		model: "X5", // Mẫu xe
		owner: "67fe3467ed8a8fe17d0ba6e2", // ID chủ xe
		pricePerDay: 7000000, // Giá thuê mỗi ngày: 7.000.000 VNĐ
		seating_capacity: 4, // Số chỗ ngồi: 4 chỗ
		transmission: "Bán tự động", // Hộp số: Bán tự động
		year: 2006, // Năm sản xuất
	},
	{
		_id: "67ff6b758f1b3684286a2a65",
		brand: "Toyota",
		category: "Sedan", // Loại xe: Sedan
		createdAt: "2025-04-16T08:33:57.993Z",
		description:
			"Toyota Corolla là mẫu sedan hạng trung cao cấp được sản xuất bởi Toyota. Corolla ra mắt năm 2008 như mẫu sedan đầu tiên của Toyota.",
		fuel_type: "Dầu diesel", // Loại nhiên liệu: Dầu diesel
		image: car_image2,
		isAvailable: true,
		location: "TP. Hồ Chí Minh",
		model: "Corolla",
		owner: "67fe3467ed8a8fe17d0ba6e2",
		pricePerDay: 3000000, // Giá thuê mỗi ngày: 3.000.000 VNĐ
		seating_capacity: 4,
		transmission: "Số sàn", // Hộp số: Số sàn
		year: 2021,
	},
	{
		_id: "67ff6b9f8f1b3684286a2a68",
		brand: "Jeep ",
		category: "SUV",
		createdAt: "2025-04-16T08:34:39.592Z",
		description:
			"Jeep Wrangler là mẫu SUV hạng trung cao cấp được sản xuất bởi Jeep. Wrangler ra mắt năm 2003 như mẫu SUV đầu tiên của Jeep.",
		fuel_type: "Hybrid", // Loại nhiên liệu: Xăng lai (Hybrid)
		image: car_image3,
		isAvailable: true,
		location: "Đà Nẵng",
		model: "Wrangler",
		owner: "67fe3467ed8a8fe17d0ba6e2",
		pricePerDay: 4500000, // Giá thuê mỗi ngày: 4.500.000 VNĐ
		seating_capacity: 4,
		transmission: "Tự động", // Hộp số: Tự động
		year: 2023,
	},
	{
		_id: "68009c93a3f5fc6338ea7e34",
		brand: "Ford",
		category: "Sedan",
		createdAt: "2025-04-17T06:15:47.318Z",
		description:
			"Đây là mẫu sedan hạng trung cao cấp được sản xuất bởi Toyota. Corolla ra mắt năm 2008 như mẫu sedan đầu tiên của Toyota.",
		fuel_type: "Dầu diesel", // Loại nhiên liệu: Dầu diesel
		image: car_image4,
		isAvailable: true,
		location: "Hải Phòng",
		model: "Neo 6",
		owner: "67fe3467ed8a8fe17d0ba6e2",
		pricePerDay: 4800000, // Giá thuê mỗi ngày: 4.800.000 VNĐ
		seating_capacity: 2, // Số chỗ ngồi: 2 chỗ
		transmission: "Bán tự động",
		year: 2022,
	},
];

// Dữ liệu đặt xe mẫu để kiểm thử ứng dụng
export const dummyMyBookingsData = [
	{
		_id: "68482bcc98eb9722b7751f70", // ID đặt xe
		car: dummyCarData[0], // Thông tin xe được đặt
		createdAt: "2025-06-10T12:57:48.244Z", // Thời gian tạo đặt xe
		owner: "6847f7cab3d8daecdb517095", // ID chủ xe
		pickupDate: "2025-06-13T00:00:00.000Z", // Ngày nhận xe
		price: 10000000, // Tổng giá: 10.000.000 VNĐ
		returnDate: "2025-06-14T00:00:00.000Z", // Ngày trả xe
		status: "đã xác nhận", // Trạng thái: đã xác nhận
		user: "6847f7cab3d8daecdb517095", // ID người dùng đặt xe
	},
	{
		_id: "68482bb598eb9722b7751f60",
		car: dummyCarData[1],
		createdAt: "2025-06-10T12:57:25.613Z",
		owner: "67fe3467ed8a8fe17d0ba6e2",
		pickupDate: "2025-06-12T00:00:00.000Z",
		price: 3000000, // Tổng giá: 3.000.000 VNĐ
		returnDate: "2025-06-12T00:00:00.000Z",
		status: "đang chờ", // Trạng thái: đang chờ xử lý
		user: "6847f7cab3d8daecdb517095",
	},
	{
		_id: "684800fa0fb481c5cfd92e56",
		car: dummyCarData[2],
		createdAt: "2025-06-10T09:55:06.379Z",
		owner: "67fe3467ed8a8fe17d0ba6e2",
		pickupDate: "2025-06-11T00:00:00.000Z",
		price: 13500000, // Tổng giá: 13.500.000 VNĐ
		returnDate: "2025-06-12T00:00:00.000Z",
		status: "đang chờ", // Trạng thái: đang chờ xử lý
		user: "6847f7cab3d8daecdb517095",
	},
	{
		_id: "6847fe790fb481c5cfd92d94",
		car: dummyCarData[3],
		createdAt: "2025-06-10T09:44:25.410Z",
		owner: "6847f7cab3d8daecdb517095",
		pickupDate: "2025-06-11T00:00:00.000Z",
		price: 10000000, // Tổng giá: 10.000.000 VNĐ
		returnDate: "2025-06-12T00:00:00.000Z",
		status: "đã xác nhận", // Trạng thái: đã xác nhận
		user: "6847f7cab3d8daecdb517095",
	},
];

// Dữ liệu bảng điều khiển mẫu cho chủ xe
export const dummyDashboardData = {
	completedBookings: 2, // Đặt xe đã hoàn thành: 2
	monthlyRevenue: 19500000, // Doanh thu tháng này: 19.500.000 VNĐ
	pendingBookings: 0, // Đặt xe đang chờ: 0
	recentBookings: [
		// Các đặt xe gần đây
		dummyMyBookingsData[0],
		dummyMyBookingsData[1],
	],
	totalBookings: 2, // Tổng số đặt xe: 2
	totalCars: 4, // Tổng số xe: 4
};
