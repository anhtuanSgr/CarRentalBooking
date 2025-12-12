// Import các icon và hình ảnh cho ứng dụng
import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import main_car from "./main_car.png";
import banner_car_image from "./banner_car_image.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";

// Danh sách các thành phố có sẵn để thuê xe
export const cityList = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];

// Đối tượng chứa tất cả các tài nguyên (icon và hình ảnh) được sử dụng trong ứng dụng
export const assets = {
  logo,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  testimonial_image_1,
  testimonial_image_2,
  main_car,
  banner_car_image,
  car_image1,
  upload_icon,
  user_profile,
  car_image2,
  car_image3,
  car_image4,
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
    name: "Bảng điều khiển",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Thêm xe",
    path: "/owner/add-car",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Quản lý xe",
    path: "/owner/manage-cars",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Quản lý đặt xe",
    path: "/owner/manage-bookings",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];

// Dữ liệu người dùng mẫu để kiểm thử ứng dụng
export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "GreatStack",
  email: "admin@example.com",
  role: "chủ xe", // Vai trò: chủ xe
  image: user_profile,
};

// Dữ liệu xe mẫu để kiểm thử ứng dụng
export const dummyCarData = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2", // ID chủ xe
    brand: "BMW", // Hãng xe
    model: "X5", // Mẫu xe
    image: car_image1, // Hình ảnh xe
    year: 2006, // Năm sản xuất
    category: "SUV", // Loại xe: SUV
    seating_capacity: 4, // Số chỗ ngồi: 4 chỗ
    fuel_type: "Hybrid", // Loại nhiên liệu: Xăng lai (Hybrid)
    transmission: "Bán tự động", // Hộp số: Bán tự động
    pricePerDay: 7000000, // Giá thuê mỗi ngày: 7.000.000 VNĐ
    location: "Hà Nội", // Vị trí: Hà Nội
    description:
      "BMW X5 là mẫu SUV hạng trung cao cấp được sản xuất bởi BMW. X5 ra mắt năm 1999 như mẫu SUV đầu tiên của BMW.", // Mô tả xe
    isAvailable: true, // Có sẵn để thuê
    createdAt: "2025-04-16T07:26:56.215Z", // Thời gian tạo
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Toyota",
    model: "Corolla",
    image: car_image2,
    year: 2021,
    category: "Sedan", // Loại xe: Sedan
    seating_capacity: 4,
    fuel_type: "Dầu diesel", // Loại nhiên liệu: Dầu diesel
    transmission: "Số sàn", // Hộp số: Số sàn
    pricePerDay: 3000000, // Giá thuê mỗi ngày: 3.000.000 VNĐ
    location: "TP. Hồ Chí Minh",
    description:
      "Toyota Corolla là mẫu sedan hạng trung cao cấp được sản xuất bởi Toyota. Corolla ra mắt năm 2008 như mẫu sedan đầu tiên của Toyota.",
    isAvailable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Jeep ",
    model: "Wrangler",
    image: car_image3,
    year: 2023,
    category: "SUV",
    seating_capacity: 4,
    fuel_type: "Hybrid", // Loại nhiên liệu: Xăng lai (Hybrid)
    transmission: "Tự động", // Hộp số: Tự động
    pricePerDay: 4500000, // Giá thuê mỗi ngày: 4.500.000 VNĐ
    location: "Đà Nẵng",
    description:
      "Jeep Wrangler là mẫu SUV hạng trung cao cấp được sản xuất bởi Jeep. Wrangler ra mắt năm 2003 như mẫu SUV đầu tiên của Jeep.",
    isAvailable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Ford",
    model: "Neo 6",
    image: car_image4,
    year: 2022,
    category: "Sedan",
    seating_capacity: 2, // Số chỗ ngồi: 2 chỗ
    fuel_type: "Dầu diesel", // Loại nhiên liệu: Dầu diesel
    transmission: "Bán tự động",
    pricePerDay: 4800000, // Giá thuê mỗi ngày: 4.800.000 VNĐ
    location: "Hải Phòng",
    description:
      "Đây là mẫu sedan hạng trung cao cấp được sản xuất bởi Toyota. Corolla ra mắt năm 2008 như mẫu sedan đầu tiên của Toyota.",
    isAvailable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
  },
];

// Dữ liệu đặt xe mẫu để kiểm thử ứng dụng
export const dummyMyBookingsData = [
  {
    _id: "68482bcc98eb9722b7751f70", // ID đặt xe
    car: dummyCarData[0], // Thông tin xe được đặt
    user: "6847f7cab3d8daecdb517095", // ID người dùng đặt xe
    owner: "6847f7cab3d8daecdb517095", // ID chủ xe
    pickupDate: "2025-06-13T00:00:00.000Z", // Ngày nhận xe
    returnDate: "2025-06-14T00:00:00.000Z", // Ngày trả xe
    status: "đã xác nhận", // Trạng thái: đã xác nhận
    price: 10000000, // Tổng giá: 10.000.000 VNĐ
    createdAt: "2025-06-10T12:57:48.244Z", // Thời gian tạo đặt xe
  },
  {
    _id: "68482bb598eb9722b7751f60",
    car: dummyCarData[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "đang chờ", // Trạng thái: đang chờ xử lý
    price: 3000000, // Tổng giá: 3.000.000 VNĐ
    createdAt: "2025-06-10T12:57:25.613Z",
  },
  {
    _id: "684800fa0fb481c5cfd92e56",
    car: dummyCarData[2],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "đang chờ", // Trạng thái: đang chờ xử lý
    price: 13500000, // Tổng giá: 13.500.000 VNĐ
    createdAt: "2025-06-10T09:55:06.379Z",
  },
  {
    _id: "6847fe790fb481c5cfd92d94",
    car: dummyCarData[3],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "đã xác nhận", // Trạng thái: đã xác nhận
    price: 10000000, // Tổng giá: 10.000.000 VNĐ
    createdAt: "2025-06-10T09:44:25.410Z",
  },
];

// Dữ liệu bảng điều khiển mẫu cho chủ xe
export const dummyDashboardData = {
  totalCars: 4, // Tổng số xe: 4
  totalBookings: 2, // Tổng số đặt xe: 2
  pendingBookings: 0, // Đặt xe đang chờ: 0
  completedBookings: 2, // Đặt xe đã hoàn thành: 2
  recentBookings: [
    // Các đặt xe gần đây
    dummyMyBookingsData[0],
    dummyMyBookingsData[1],
  ],
  monthlyRevenue: 19500000, // Doanh thu tháng này: 19.500.000 VNĐ
};
