import { ReactNode, FunctionComponent } from "react";

type Props = {
	children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
	return (
		<div
			style={{
				width: "100%",
				marginLeft: "auto",
				marginRight: "auto",
				padding: "0, 1.25em, 0, 1.25em"
			}}
		>
			{children}
		</div>
	);
};

export default Container;