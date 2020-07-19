import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type Props = {
	src: string;
	alt: string;
};

const UserAvatar = ({ src, alt }: Props) => {
	return (
		<Avatar
			src={`${src}`}
			size={200}
			icon={UserOutlined}
			shape="circle"
			alt={`${alt}`}
			style={{ textAlign: "center", verticalAlign: "center" }}
		/>
	);
};

export default UserAvatar;