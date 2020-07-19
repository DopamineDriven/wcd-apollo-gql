import { Divider, Typography } from "antd";
// import { User } from "../../lib/viewer.graphql";
const { Text, Title } = Typography;

type UProps = {
	name: string;
	role: string;
};

const UserDetails = ({ name, role }: UProps) => {
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

export default UserDetails;