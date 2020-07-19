type Props = {
	src: string;
	alt: string;
};

const CoverImage = ({ alt, src }: Props) => {
	return (
		<img
			src={src}
			alt={alt}
			style={{ textAlign: "center", verticalAlign: "middle" }}
		/>
	);
};

export default CoverImage;