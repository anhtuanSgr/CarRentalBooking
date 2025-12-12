import React from "react";

/**
 * Component Newsletter - Hiển thị form đăng ký nhận tin tức và ưu đãi
 * @returns {JSX.Element} Form đăng ký newsletter với input email và nút submit
 */
const Newsletter = () => {
  /**
   * Xử lý submit form đăng ký nhận tin
   * @param {Event} e - Event object từ form submit
   */
  const handleSubmit = (e) => {
    // Ngăn chặn hành vi mặc định của form (reload trang)
    e.preventDefault();

    // Lấy giá trị email từ input
    const email = e.target.email.value;
    console.log("Email đăng ký:", email);

    // TODO: Gọi API để lưu email đăng ký vào database
    alert("Đăng ký thành công!");

    // Reset form sau khi submit thành công
    e.target.reset();
  };

  return (
    // Container chính với layout dọc, căn giữa, responsive padding
    <div className="flex flex-col items-center justify-center my-10 mb-40 max-md:px-4 text-center space-y-2">
      {/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
      <h1 className="md:text-4xl text-2xl font-semibold">
        Đừng bỏ lỡ ưu đãi nào!
      </h1>

      {/* Mô tả ngắn về lợi ích khi đăng ký */}
      <p className="pb-8 md:text-lg text-gray-500/70">
        Đăng ký để nhận các ưu đãi mới nhất, sản phẩm mới và giảm giá độc quyền
      </p>

      {/* Form đăng ký với input email và nút submit */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12"
      >
        {/* Input email - chiếm toàn bộ chiều rộng, bo góc trái */}
        <input
          type="email"
          name="email"
          placeholder="Nhập địa chỉ email của bạn"
          required
          className="w-full h-full px-3 border border-gray-300 border-r-0 rounded-md rounded-r-none text-gray-500 outline-none"
        />

        {/* Nút submit - bo góc phải, hover effect */}
        <button
          type="submit"
          className="h-full md:px-12 px-8 text-white bg-primary rounded-md rounded-l-none transition-all cursor-pointer hover:bg-primary-dull whitespace-nowrap"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
