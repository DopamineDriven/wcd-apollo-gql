import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type Props = {
	src: string;
	alt: string;
};

export const UserAvatar = ({ src, alt }: Props) => {
	return (
		<Avatar
			src={`${src}`}
			size={200}
			icon={UserOutlined}
			className="user-avatar"
			shape="circle"
			alt={`${alt}`}
		/>
	);
};
