import { assets } from "../assets/assets";

/**
 * Component Banner - Hiển thị banner quảng cáo cho chủ xe
 * @returns {JSX.Element} Banner với nội dung khuyến khích chủ xe đăng ký
 */
const Banner = () => {
  return (
    // Container chính với gradient xanh dương, responsive layout
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      {/* Nội dung văn bản */}
      <div className="text-white">
        {/* Tiêu đề chính */}
        <h2 className="text-3xl font-medium">Bạn có sở hữu xe sang?</h2>

        {/* Mô tả ngắn về dịch vụ */}
        <p className="mt-2">
          Kiếm tiền từ xe của bạn một cách dễ dàng bằng cách đăng ký trên
          CarRental.
        </p>

        {/* Mô tả chi tiết về lợi ích */}
        <p className="max-w-130">
          Chúng tôi lo tất cả về bảo hiểm, xác minh tài xế và thanh toán an toàn
          — để bạn có thể kiếm thu nhập thụ động mà không lo lắng.
        </p>

        {/* Nút call-to-action để đăng ký xe */}
        <button
          tabIndex="0"
          className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 mb-10 md:mb-0 cursor-pointer"
        >
          Đăng ký xe của bạn
        </button>
      </div>

      {/* Hình ảnh xe minh họa */}
      <img src={assets.banner_car_image} alt="car" className="max-h-45 mt-10" />
    </div>
  );
};

export default Banner;
