import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Component Navbar - Thanh điều hướng chính của ứng dụng
// onShowLogin: Hàm callback để hiển thị modal đăng nhập
const Navbar = ({ onShowLogin }) => {
  // Lấy thông tin đường dẫn hiện tại để áp dụng style phù hợp
  const currentLocation = useLocation();
  // State quản lý trạng thái mở/đóng menu trên mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Hook để điều hướng đến các trang khác
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
        // Nếu đang ở trang chủ thì thêm background màu light
        currentLocation.pathname === "/" && "bg-light"
      }`}
    >
      {/* Logo của website, click vào sẽ về trang chủ */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-8" />
      </Link>
      {/* Container chứa menu điều hướng, thanh tìm kiếm và các nút hành động */}
      <div
        className={`max-sm:fixed max-sm:flex max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          // Đổi màu nền theo trang hiện tại
          currentLocation.pathname === "/" ? "bg-light" : "bg-white"
        } ${isMenuOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {/* Render danh sách các link menu từ file assets */}
        {menuLinks.map((menuItem, index) => (
          <Link key={index} to={menuItem.path}>
            {menuItem.name}
          </Link>
        ))}
        {/* Thanh tìm kiếm, chỉ hiển thị trên màn hình lớn (lg trở lên) */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Tìm kiếm sản phẩm"
          />
          <img src={assets.search_icon} alt="tìm kiếm" />
        </div>
        {/* Container chứa các nút hành động: Bảng điều khiển và Đăng nhập */}
        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          {/* Nút chuyển đến trang bảng điều khiển cho chủ xe */}
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Bảng điều khiển
          </button>
          {/* Nút đăng nhập, khi click sẽ hiển thị modal đăng nhập */}
          <button
            onClick={() => onShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Đăng nhập
          </button>
        </div>
      </div>
      {/* Nút menu hamburger, chỉ hiển thị trên mobile (sm trở xuống) */}
      {/* Khi click sẽ toggle trạng thái mở/đóng menu */}
      <button
        className="sm:hidden cursor-pointer"
        aria-label="menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hiển thị icon đóng nếu menu đang mở, icon menu nếu đang đóng */}
        <img
          src={isMenuOpen ? assets.close_icon : assets.menu_icon}
          alt="menu"
        />
      </button>
    </div>
  );
};

export default Navbar;
