import { GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { User } from "../../lib/viewer.graphql";

type Props = {
	viewers: User;
};

export const Github = ({ viewers }: Props) => {
	return (
		<Button
			href={viewers.github}
			target="__blank"
			style={{
				border: "1px #000000 groove",
				color: "#000000",
				fontWeight: "bold"
			}}
		>
			<GithubOutlined
				key="github"
				className="user-github-icon"
				style={{ color: "#b3ddf2" }}
			/>
		</Button>
	);
};
