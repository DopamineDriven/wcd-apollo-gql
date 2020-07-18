import { Button } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

type Props = {
	linkedin: string;
};

export const Linkedin = ({ linkedin }: Props) => {
	return (
		<Button
			href={`${linkedin}`}
			target="__blank"
			style={{
				border: "1px #000000 groove",
				color: "#000000",
				fontWeight: "bold"
			}}
		>
			<LinkedinOutlined key="linkedin" className="user-social-media-icon" />
		</Button>
	);
};
