import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";
// type Props = {
// 	viewers: React.ReactNode[];
// };

type Props = {
	github: string;
};

export const Github = ({ github }: Props) => {
	return (
		<Button
			href={`${github}`}
			className="user-social-media-button"
			target="__blank"
			style={{
				border: "1px #000000 groove",
				color: "#000000",
				fontWeight: "bold"
			}}
			icon={<GithubOutlined key="github" className="user-social-media-icon" />}
		/>
	);
};
