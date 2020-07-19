import { Divider, Typography } from "antd";
// import { User } from "../../lib/viewer.graphql";
const { Paragraph, Text } = Typography;

type CProps = {
	content: string;
};

const ContentDetails = ({ content }: CProps) => {
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

export default ContentDetails;