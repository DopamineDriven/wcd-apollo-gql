import { Button } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

type Props = {
	twitter: string;
};

export const Twitter = ({ twitter }: Props) => {
	return (
		<Button
			href={`${twitter}`}
			target="__blank"
			style={{
				border: "1px #000000 groove",
				color: "#000000",
				fontWeight: "bold"
			}}
		>
			<TwitterOutlined key="linkedin" className="user-social-media-icon" />
		</Button>
	);
};
