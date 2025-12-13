const Title = ({ title, description }) => {
	return (
		<div>
			<h1 className="font-medium text-3xl">{title}</h1>
			<p className="mt-2 max-w-156 text-gray-500/90 text-sm md:text-base">
				{description}
			</p>
		</div>
	);
};

export default Title;
