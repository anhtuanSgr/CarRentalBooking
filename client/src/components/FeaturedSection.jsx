import { useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import CarCard from "./CarCard";
import Title from "./Title";

/**
 * Component FeaturedSection - Hiển thị phần xe nổi bật trên trang chủ
 * @returns {JSX.Element} Section chứa danh sách xe nổi bật và nút xem tất cả
 */
const FeaturedSection = () => {
  // Lấy 6 xe đầu tiên từ dữ liệu để hiển thị trong phần Featured
  const featuredCars = dummyCarData.slice(0, 6);

  // Hook điều hướng trang
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ opacity: 1, transform: "none" }}
    >
      {/* Tiêu đề section với mô tả */}
      <Title
        title="Xe nổi bật"
        description="Khám phá bộ sưu tập xe cao cấp của chúng tôi có sẵn cho chuyến phiêu lưu tiếp theo của bạn."
      />

      {/* Grid hiển thị các xe nổi bật - responsive với 1, 2, 3 cột */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18"
        style={{ opacity: 1, transform: "none" }}
      >
        {/* Render từng thẻ xe */}
        {featuredCars.map((car) => (
          <div key={car._id} style={{ opacity: 1, transform: "none" }}>
            <CarCard car={car} />
          </div>
        ))}
      </div>

      {/* Nút xem tất cả xe - điều hướng đến trang danh sách xe */}
      <button
        onClick={() => {
          // Điều hướng đến trang danh sách xe
          navigate("/cars");
          // Cuộn lên đầu trang
          window.scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor rounded-md mt-18 cursor-pointer hover:bg-gray-50"
        style={{ opacity: 1, transform: "none" }}
      >
        Khám phá tất cả xe
        {/* Icon mũi tên */}
        <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default FeaturedSection;
