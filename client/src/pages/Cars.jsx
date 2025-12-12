import React, { useState } from "react";
import { assets, dummyCarData } from "../assets/assets";
import Title from "../components/Title";
import CarCard from "../components/CarCard";

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
      car.transmission.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      {/* Container chính với padding dọc và nền sáng */}
      <div
        className="flex flex-col items-center py-20 bg-light max-md:px-4"
        style={{ opacity: 1, transform: "none" }}
      >
        {/* Tiêu đề trang */}
        <Title
          title="Xe Có Sẵn"
          description="Khám phá bộ sưu tập xe cao cấp của chúng tôi cho chuyến phiêu lưu tiếp theo của bạn"
        />

        {/* Thanh tìm kiếm với icon search và filter */}
        <div
          className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow"
          style={{ opacity: 1, transform: "none" }}
        >
          {/* Icon tìm kiếm */}
          <img
            src={assets.search_icon}
            alt=""
            className="w-4.5 h-4.5 mr-2"
          />

          {/* Input tìm kiếm */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo hãng, mẫu xe hoặc tính năng"
            className="w-full h-full outline-none text-gray-500"
          />

          {/* Icon filter */}
          <img
            src={assets.filter_icon}
            alt=""
            className="w-4.5 h-4.5 ml-2 cursor-pointer"
          />
        </div>
      </div>

      {/* Container danh sách xe */}
      <div
        className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10"
        style={{ opacity: 1 }}
      >
        {/* Hiển thị số lượng xe */}
        <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
          Hiển thị {filteredCars.length} xe
        </p>

        {/* Lưới hiển thị các thẻ xe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
          {filteredCars.map((car) => (
            <div key={car._id} style={{ opacity: 1, transform: "none" }}>
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* Hiển thị thông báo khi không tìm thấy xe */}
        {filteredCars.length === 0 && (
          <div className="text-center py-20 xl:px-20 max-w-7xl mx-auto">
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
