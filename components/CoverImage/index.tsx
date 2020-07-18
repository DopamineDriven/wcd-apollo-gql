type Props = {
	src: string;
	alt: string;
};

export const CoverImage = ({ alt, src }: Props) => {
	return (
		<img
			src={`${src}`}
			alt={`${alt}`}
			style={{ textAlign: "center", verticalAlign: "middle" }}
		/>
	);
};
