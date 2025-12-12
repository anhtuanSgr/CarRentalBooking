import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * Component Footer - Hiển thị footer của website
 * @returns {JSX.Element} Footer với logo, mô tả, menu và thông tin liên hệ
 */
const Footer = () => {
  return (
    // Container chính của footer với padding responsive
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      {/* Phần nội dung chính của footer */}
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-gray-300">
        {/* Phần logo và mô tả công ty */}
        <div>
          {/* Logo công ty */}
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />

          {/* Mô tả ngắn về dịch vụ */}
          <p className="max-w-80 mt-3">
            Dịch vụ cho thuê xe cao cấp với nhiều lựa chọn xe sang trọng và phổ
            thông cho mọi nhu cầu lái xe của bạn.
          </p>

          {/* Các icon mạng xã hội */}
          <div className="flex items-center gap-3 mt-6">
            {/* Link Facebook */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img
                src={assets.facebook_logo}
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>

            {/* Link Instagram */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img
                src={assets.instagram_logo}
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>

            {/* Link Twitter */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img
                src={assets.twitter_logo}
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>

            {/* Link Email */}
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img src={assets.gmail_logo} alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Phần các cột menu */}
        <div className="flex flex-wrap justify-between w-1/2 gap-8">
          {/* Cột Quick Links - Các liên kết nhanh đến các trang chính */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Liên kết nhanh
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/cars">Xe có sẵn</Link>
              </li>
              <li>
                <Link to="/my-bookings">Đặt xe của tôi</Link>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Về chúng tôi
                </a>
              </li>
            </ul>
          </div>

          {/* Cột Resources - Các tài nguyên và chính sách */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Tài nguyên
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Bảo hiểm
                </a>
              </li>
            </ul>
          </div>

          {/* Cột Contact - Thông tin liên hệ */}
          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Liên hệ
            </h2>
            <ul className="flex flex-col gap-1.5 mt-3">
              {/* Địa chỉ */}
              <li>123 Đường Láng</li>
              <li>Hà Nội, Việt Nam</li>

              {/* Số điện thoại */}
              <li>+84 123 456 789</li>

              {/* Email */}
              <li>info@carrental.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Phần copyright và links phụ */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        {/* Thông tin bản quyền với năm hiện tại */}
        <p>© {new Date().getFullYear()} CarRental. Đã đăng ký bản quyền.</p>

        {/* Các liên kết phụ */}
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Bảo mật
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Điều khoản
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
