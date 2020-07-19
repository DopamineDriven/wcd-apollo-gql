import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type Props = {
	src: string;
	alt: string;
};

const UserAvatar = ({ src, alt }: Props) => {
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Avatar
				src={src}
				size={150}
				icon={UserOutlined}
				shape="circle"
				alt={alt}
				style={{ textAlign: "center", verticalAlign: "center" }}
			/>
		</div>
	);
};

export default UserAvatar;
