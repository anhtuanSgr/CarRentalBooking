import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

/**
 * Component CarCard - Hiển thị thẻ thông tin xe
 * @param {Object} car - Đối tượng chứa thông tin xe
 * @returns {JSX.Element} Thẻ xe với hình ảnh và thông tin chi tiết
 */
const CarCard = ({ car }) => {
  /**
   * Format giá tiền theo định dạng VNĐ
   * @param {number} price - Giá tiền cần format
   * @returns {string} Chuỗi giá tiền đã được format
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  // Hook điều hướng trang
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        // Điều hướng đến trang chi tiết xe
        navigate(`/car-details/${car._id}`);
        // Cuộn lên đầu trang
        window.scrollTo(0, 0);
      }}
      className="group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-1 cursor-pointer"
    >
      {/* Container hình ảnh xe */}
      <div className="relative h-48 overflow-hidden">
        {/* Hình ảnh xe với hiệu ứng zoom khi hover */}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge trạng thái xe - chỉ hiển thị khi xe có sẵn */}
        {car.isAvailable && (
          <p className="absolute top-4 left-4 rounded-full bg-primary/90 px-2.5 py-1 text-xs text-white">
            Có sẵn ngay
          </p>
        )}

        {/* Hiển thị giá thuê xe */}
        <div className="absolute bottom-4 right-4 rounded-lg bg-black/80 px-3 py-2 backdrop-blur-sm text-white">
          <span className="font-semibold">{formatPrice(car.pricePerDay)}₫</span>
          <span className="text-sm text-white/80"> / ngày</span>
        </div>
      </div>

      {/* Thông tin chi tiết xe */}
      <div className="p-4 sm:p-5">
        {/* Tên và loại xe */}
        <div className="mb-2 flex items-start justify-between">
          <div>
            {/* Tên xe: Hãng + Model */}
            <h3 className="text-lg font-medium">
              {car.brand} {car.model}
            </h3>
            {/* Danh mục và năm sản xuất */}
            <p className="text-sm text-muted-foreground">
              {car.category} • {car.year}
            </p>
          </div>
        </div>

        {/* Thông số kỹ thuật - Grid 2 cột */}
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
          {/* Số chỗ ngồi */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.users_icon} alt="" className="mr-2 h-4" />
            <span>{car.seating_capacity} Chỗ</span>
          </div>

          {/* Loại nhiên liệu */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.fuel_icon} alt="" className="mr-2 h-4" />
            <span>{car.fuel_type}</span>
          </div>

          {/* Hộp số */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.car_icon} alt="" className="mr-2 h-4" />
            <span>{car.transmission}</span>
          </div>

          {/* Vị trí xe */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.location_icon} alt="" className="mr-2 h-4" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
