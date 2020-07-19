import { MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
// type Props = {
// 	viewers: React.ReactNode[];
// };

type Props = {
	email: string;
};

const Email = ({ email }: Props) => {
	return (
		<Button
			href={`${email}`}
			className="user-social-media-button"
            target="__blank"
            shape="round"
			icon={<MailOutlined key="github" className="user-social-media-icon" />}
		/>
	);
};

export default Email;