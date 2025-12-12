import { assets } from "../assets/assets";
import Title from "./Title";

/**
 * Component Testimonial - Hiển thị các đánh giá từ khách hàng
 * @returns {JSX.Element} Section testimonial với các card đánh giá từ khách hàng
 */
const Testimonial = () => {
  // Dữ liệu đánh giá từ khách hàng
  const testimonials = [
    {
      id: 1,
      image: assets.testimonial_image_1,
      location: "Barcelona, Spain",
      name: "Emma Rodriguez",
      rating: 5,
      review:
        "Tôi đã thuê xe từ nhiều công ty khác nhau, nhưng trải nghiệm với CarRental thật đặc biệt.",
    },
    {
      id: 2,
      image: assets.testimonial_image_2,
      location: "New York, USA",
      name: "John Smith",
      rating: 5,
      review:
        "CarRental đã làm cho chuyến đi của tôi dễ dàng hơn rất nhiều. Xe được giao tận nơi và dịch vụ khách hàng tuyệt vời!",
    },
    {
      id: 3,
      image: assets.testimonial_image_3,
      location: "Sydney, Australia",
      name: "Ava Johnson",
      rating: 5,
      review:
        "Tôi thực sự khuyên dùng CarRental! Đội xe của họ tuyệt vời và tôi luôn cảm thấy mình nhận được ưu đãi tốt nhất với dịch vụ xuất sắc.",
    },
  ];

  return (
    // Container chính với padding responsive
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      {/* Tiêu đề section với mô tả */}
      <Title
        title="Khách hàng nói gì về chúng tôi"
        description="Khám phá lý do tại sao những khách hàng sành điệu chọn CarRental cho nhu cầu thuê xe cao cấp của họ trên khắp đất nước."
      />

      {/* Grid hiển thị các đánh giá - responsive với 1-3 cột tùy kích thước màn hình */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {/* Map qua mảng testimonials để render từng card đánh giá */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* Phần thông tin khách hàng - avatar, tên và địa điểm */}
            <div className="flex items-center gap-3">
              {/* Avatar khách hàng */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />

              {/* Tên và địa điểm khách hàng */}
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            {/* Hiển thị đánh giá sao - render số lượng sao dựa trên rating */}
            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <img key={index} src={assets.star_icon} alt="star-icon" />
              ))}
            </div>

            {/* Nội dung đánh giá từ khách hàng */}
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
