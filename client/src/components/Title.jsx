import React from "react";

/**
 * Component Title - Hiển thị tiêu đề và mô tả cho các section
 * @param {Object} props - Props của component
 * @param {string} props.title - Tiêu đề chính của section
 * @param {string} props.description - Mô tả chi tiết của section
 * @returns {JSX.Element} Container với tiêu đề và mô tả được căn giữa
 */
const Title = ({ title, description }) => {
  return (
    // Container chính với opacity và transform mặc định
    <div style={{ opacity: 1, transform: "none" }}>
      {/* Container flex với layout dọc, căn giữa theo cả 2 chiều */}
      <div className="flex flex-col justify-center items-center text-center">
        {/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
        <h1 className="font-semibold text-4xl md:text-[40px]">{title}</h1>

        {/* Mô tả - responsive với kích thước text, màu xám, margin top, không xuống dòng */}
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-full whitespace-nowrap">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Title;
