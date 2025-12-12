import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

/**
 * Component CarDetails - Hiển thị trang chi tiết xe và form đặt xe
 * Sử dụng useParams để lấy id của xe từ URL
 * @returns {JSX.Element} Trang chi tiết xe với thông tin và form booking
 */
const CarDetails = () => {
  // Lấy id từ URL params
  const { id } = useParams();

  // Hook điều hướng
  const navigate = useNavigate();

  // State quản lý dữ liệu xe
  const [carData, setCarData] = useState(null);

  // State quản lý trạng thái loading
  const [loading, setLoading] = useState(true);

  // State quản lý form đặt xe
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  /**
   * Format giá tiền theo định dạng VNĐ
   * @param {number} price - Giá tiền cần format
   * @returns {string} Chuỗi giá tiền đã được format
   */
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  /**
   * Lấy ngày hiện tại theo định dạng YYYY-MM-DD
   * @returns {string} Ngày hiện tại
   */
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  /**
   * Xử lý submit form đặt xe
   * @param {Event} e - Event submit
   */
  const handleBooking = (e) => {
    e.preventDefault();

    // Validate ngày nhận và ngày trả
    if (!pickupDate || !returnDate) {
      alert("Vui lòng chọn ngày nhận và ngày trả xe");
      return;
    }

    // Kiểm tra ngày trả phải sau ngày nhận
    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Ngày trả xe phải sau ngày nhận xe");
      return;
    }

    // TODO: Gửi request đặt xe đến backend
    console.log("Đặt xe:", {
      carId: id,
      pickupDate,
      returnDate,
    });

    alert("Đặt xe thành công!");
  };

  /**
   * Fetch dữ liệu xe từ backend hoặc dummy data
   * useEffect chạy khi component mount hoặc id thay đổi
   */
  useEffect(() => {
    // Simulate API call với setTimeout
    const fetchCarData = async () => {
      try {
        setLoading(true);

        // TODO: Thay thế bằng API call thực tế
        // const response = await fetch(`/api/cars/${id}`);
        // const data = await response.json();

        // Sử dụng dummy data để demo
        const car = dummyCarData.find((car) => car._id === id);

        // Simulate network delay
        setTimeout(() => {
          if (car) {
            setCarData(car);
          } else {
            alert("Không tìm thấy xe");
            navigate("/cars");
          }
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu xe:", error);
        alert("Có lỗi xảy ra khi tải dữ liệu xe");
        setLoading(false);
      }
    };

    fetchCarData();
  }, [id, navigate]);

  // Hiển thị loader khi đang tải dữ liệu
  if (loading) {
    return <Loader />;
  }

  // Hiển thị thông báo nếu không tìm thấy xe
  if (!carData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Không tìm thấy thông tin xe</p>
      </div>
    );
  }

  return (
    <div className="mt-16 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Nút quay lại */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex cursor-pointer items-center gap-2 text-gray-500"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Quay lại trang trước
      </button>

      {/* Grid layout: 2 cột trái (thông tin xe) và 1 cột phải (form booking) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Cột trái - Thông tin chi tiết xe */}
        <div className="lg:col-span-2">
          {/* Hình ảnh xe */}
          <img
            src={carData.image}
            alt={`${carData.brand} ${carData.model}`}
            className="mb-6 h-auto w-full rounded-xl object-cover shadow-md md:max-h-100"
          />

          {/* Chi tiết xe */}
          <div className="space-y-6">
            {/* Tên xe và loại */}
            <div>
              <h1 className="text-3xl font-bold">
                {carData.brand} {carData.model}
              </h1>
              <p className="text-lg text-gray-500">
                {carData.category} • {carData.year}
              </p>
            </div>

            <hr className="my-6 border-borderColor" />

            {/* Thông số kỹ thuật - Grid 4 cột */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {/* Số chỗ ngồi */}
              <div className="flex flex-col items-center rounded-lg bg-light p-4">
                <img src={assets.users_icon} alt="" className="mb-2 h-5" />
                {carData.seating_capacity} Chỗ
              </div>

              {/* Loại nhiên liệu */}
              <div className="flex flex-col items-center rounded-lg bg-light p-4">
                <img src={assets.fuel_icon} alt="" className="mb-2 h-5" />
                {carData.fuel_type}
              </div>

              {/* Hộp số */}
              <div className="flex flex-col items-center rounded-lg bg-light p-4">
                <img src={assets.car_icon} alt="" className="mb-2 h-5" />
                {carData.transmission}
              </div>

              {/* Vị trí */}
              <div className="flex flex-col items-center rounded-lg bg-light p-4">
                <img src={assets.location_icon} alt="" className="mb-2 h-5" />
                {carData.location}
              </div>
            </div>

            {/* Mô tả xe */}
            <div>
              <h1 className="mb-3 text-xl font-medium">Mô tả</h1>
              <p className="text-gray-500">{carData.description}</p>
            </div>

            {/* Tính năng xe */}
            <div>
              <h1 className="mb-3 text-xl font-medium">Tính năng</h1>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {/* Danh sách tính năng */}
                <li className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="mr-2 h-4" />
                  Camera 360
                </li>
                <li className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="mr-2 h-4" />
                  Bluetooth
                </li>
                <li className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="mr-2 h-4" />
                  GPS
                </li>
                <li className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="mr-2 h-4" />
                  Ghế sưởi ấm
                </li>
                <li className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="mr-2 h-4" />
                  Gương chiếu hậu
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cột phải - Form đặt xe */}
        <form
          onSubmit={handleBooking}
          className="sticky top-18 h-max space-y-6 rounded-xl p-6 text-gray-500 shadow-lg"
        >
          {/* Giá thuê */}
          <p className="flex items-center justify-between text-2xl font-semibold text-gray-800">
            {formatPrice(carData.pricePerDay)}₫
            <span className="text-base font-normal text-gray-400">/ ngày</span>
          </p>

          <hr className="my-6 border-borderColor" />

          {/* Trường chọn ngày nhận xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Ngày nhận xe</label>
            <input
              type="date"
              id="pickup-date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              min={getTodayDate()}
              required
              className="rounded-lg border border-borderColor px-3 py-2"
            />
          </div>

          {/* Trường chọn ngày trả xe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Ngày trả xe</label>
            <input
              type="date"
              id="return-date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              min={pickupDate || getTodayDate()}
              required
              className="rounded-lg border border-borderColor px-3 py-2"
            />
          </div>

          {/* Nút đặt xe */}
          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-primary py-3 font-medium text-white transition-all hover:bg-primary-dull"
          >
            Đặt xe ngay
          </button>

          {/* Thông báo */}
          <p className="text-center text-sm">
            Không cần thẻ tín dụng để đặt chỗ
          </p>
        </form>
      </div>
    </div>
  );
};

export default CarDetails;
