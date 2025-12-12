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
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center">
      {/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
      <h1 className="text-4xl md:text-5xl font-semibold">Xe sang cho thuê</h1>

      {/* Form tìm kiếm xe - layout dọc trên mobile, ngang trên desktop */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-[800px] bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        {/* Container cho các input - responsive layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">
          {/* Select địa điểm nhận xe */}
          <div className="flex flex-col items-start gap-2">
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="text-sm"
            required
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
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? "" : "Vui lòng chọn địa điểm"}
            </p>
          </div>

          {/* Input ngày nhận xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
          <input
            id="pickup-date"
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="text-sm text-gray-500"
            min={today} // Không cho chọn ngày trong quá khứ
            required
          />
          </div>

          {/* Input ngày trả xe */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
          <input
            id="return-date"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="text-sm text-gray-500"
            min={pickupDate || today} // Không cho chọn ngày trước ngày nhận xe
            required
          />
          </div>
        </div>

        {/* Nút tìm kiếm với icon và text */}
        <button
          type="submit"
          className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-colors"
        >
          {/* Icon tìm kiếm */}
          <img
            src={assets.search_icon}
            alt="tìm kiếm"
            width="16"
            height="16"
            className="brightness-300"
          />
          Tìm kiếm
        </button>
      </form>

      {/* Hình ảnh xe chính - hiển thị ở cuối hero section */}
      <img src={assets.main_car} alt="xe" className="max-h-74" />
    </div>
  );
};

export default Hero;
