/**
 * Component Loader - Hiển thị loading spinner khi đang tải dữ liệu
 * @returns {JSX.Element} Loading spinner với animation xoay
 */
const Loader = () => {
	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			{/* Container spinner */}
			<div className="flex flex-col items-center gap-4">
				{/* Spinner circle với animation xoay */}
				<div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-primary"></div>

				{/* Text loading */}
				<p className="text-gray-500">Đang tải...</p>
			</div>
		</div>
	);
};

export default Loader;
