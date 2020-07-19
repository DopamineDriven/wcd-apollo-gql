import { Button } from "antd";
import { TwitterOutlined } from "@ant-design/icons";

type Props = {
	twitter: string;
};

const Twitter = ({ twitter }: Props) => {
	return (
		<Button
			href={`${twitter}`}
			target="__blank"
			className="user-social-media-button"
			shape="round"
			icon={
				<TwitterOutlined key="linkedin" className="user-social-media-icon" />
			}
		/>
	);
};

export default Twitter;