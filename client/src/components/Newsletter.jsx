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
		<div className="my-10 mb-40 flex flex-col items-center justify-center space-y-2 text-center max-md:px-4">
			{/* Tiêu đề chính - responsive với kích thước khác nhau trên mobile và desktop */}
			<h1 className="font-semibold text-2xl md:text-4xl">
				Đừng bỏ lỡ ưu đãi nào!
			</h1>

			{/* Mô tả ngắn về lợi ích khi đăng ký */}
			<p className="pb-8 text-gray-500/70 md:text-lg">
				Đăng ký để nhận các ưu đãi mới nhất, sản phẩm mới và giảm giá độc quyền
			</p>

			{/* Form đăng ký với input email và nút submit */}
			<form
				className="flex h-12 w-full max-w-2xl items-center justify-between md:h-14"
				onSubmit={handleSubmit}
			>
				{/* Input email - chiếm toàn bộ chiều rộng, bo góc trái */}
				<input
					className="h-full w-full rounded-md rounded-r-none border border-gray-300 border-r-0 px-3 text-gray-500 outline-none"
					name="email"
					placeholder="Nhập địa chỉ email của bạn"
					required
					type="email"
				/>

				{/* Nút submit - bo góc phải, hover effect */}
				<button
					className="r h-full cursor-pointe whitespace-nowrap rounded-md rounded-l-none bg-primary px-8 text-white transition-all hover:bg-primary-dull md:px-12"
					type="submit"
				>
					Đăng ký
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
