import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

type Props = {
	github: string;
};

export const Github = ({ github }: Props) => {
	return (
		<Button
			href={`${github}`}
			className="user-social-media-button"
			target="__blank"
			shape="round"
			icon={<GithubOutlined key="github" className="user-social-media-icon" />}
		/>
	);
};
