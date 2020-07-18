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
			className="user-social-media-button"
			shape="round"
			icon={
				<LinkedinOutlined key="linkedin" className="user-social-media-icon" />
			}
		/>
	);
};
