import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

/**
 * Component Home - Trang chủ của ứng dụng thuê xe
 * @returns {JSX.Element} Trang chủ với các section: Hero, FeaturedSection, Banner, Testimonial, Newsletter
 */
const Home = () => {
  return (
    // Container chính chứa tất cả các section của trang chủ
    <div>
      {/* Hero section - Phần banner chính với form tìm kiếm xe */}
      <Hero />

      {/* Featured section - Hiển thị các xe nổi bật */}
      <FeaturedSection />

      {/* Banner - Phần quảng cáo/thông tin khuyến mãi */}
      <Banner />

      {/* Testimonial - Phần đánh giá từ khách hàng */}
      <Testimonial />

      {/* Newsletter - Form đăng ký nhận tin tức và ưu đãi */}
      <Newsletter />
    </div>
  );
};

export default Home;
