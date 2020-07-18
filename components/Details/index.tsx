import { Divider, Typography } from "antd";
// import { User } from "../../lib/viewer.graphql";
const { Paragraph, Text, Title } = Typography;

type UProps = {
	name: string;
	role: string;
};

export const UserDetails = ({ name, role }: UProps) => {
	return (
		<>
			<Title level={4} style={{ marginBottom: "20px" }}>
				<Text className="user-name-user-role">
					{`${name}`}&nbsp;&nbsp;&nbsp;{`${role}`}
				</Text>
			</Title>
			<Divider />
		</>
	);
};

type CProps = {
	content: string;
};

export const ContentDetails = ({ content }: CProps) => {
	return (
		<>
			<Divider />
			<Paragraph>
				<Text className="user-content">
					<em>{`${content}`}</em>
				</Text>
			</Paragraph>
		</>
	);
};
