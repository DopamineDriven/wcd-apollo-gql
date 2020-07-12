import React from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import {
	Avatar,
	Card,
	Col,
	Divider,
	Layout,
	Row,
	Spin,
	Typography
} from "antd";
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	UserOutlined
} from "@ant-design/icons";
import { ErrorBanner } from "../utils";
import { PageSkeleton } from "../components";

const { Meta } = Card;
const { Content } = Layout;
const { Paragraph, Text, Title } = Typography;

const gridStyle = {
	width: "33.33%",
	textAlign: "justify"
};

export async function getStaticProps({}: GetStaticProps) {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ViewerDocument
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract()
		}
	};
}

const Index: NextPage = () => {
	const { data, loading, error } = useViewerQuery();
	if (data) {
		const { viewers } = data!;
		console.log(viewers);

		const items = viewers.map(viewer => (
			<Card
				key={viewer.id}
				hoverable={true}
				className="user-card-grid"
				cover={
					<Avatar
						src={`https://res.cloudinary.com/asross311/image/upload/v1594586260/ASR_Assets/next-jamstack_ml7non.png`}
						icon={UserOutlined}
						alt={`nextjs and JAMstack`}
						className="user-avatar"
						shape="square"
					/>
				}
				actions={[
					<GithubOutlined key="github" href={viewer.github} target="__blank" />,
					<LinkedinOutlined
						key="linkedin"
						href={viewer.linkedin}
						target="__blank"
					/>,
					<TwitterOutlined
						key="twitter"
						href={viewer.twitter}
						target="__blank"
					/>
				]}
			>
				<Title level={4} className="user-details">
					<Text strong>
						{viewer.name}&nbsp;&nbsp;&nbsp;&nbsp;{viewer.role}
					</Text>
				</Title>
				<Divider />
				<div className="user-avatar">
					<Avatar
						size={150}
						src={`https://res.cloudinary.com/asross311/image/upload/v1594586260/ASR_Assets/next-jamstack_ml7non.png`}
						icon={UserOutlined}
						className="user-avatar"
						shape="square"
					/>
				</div>
				<Divider />
				<Meta
					title={viewer.email}
					description={
						<Link href="/about">
							<a>About</a>
						</Link>
					}
					avatar={
						<Avatar
							src={viewer.image}
							icon={UserOutlined}
							className="user-avatar"
							shape="circle"
						/>
					}
				/>
			</Card>
		));

		return error ? (
			<Content className="user">
				<ErrorBanner description="error occurred; please try again" />
				<PageSkeleton />
			</Content>
		) : loading ? (
			<Content className="user">
				<div className="spin-section">
					<Spin size="large" tip="Launching App" />
					<PageSkeleton />
				</div>
			</Content>
		) : (
			<Content className="user-card">
				<ul>{items}</ul>
				go to the{" "}
				<Link href="/about">
					<a>about</a>
				</Link>{" "}
				page.
			</Content>
		);
	}
	return <div></div>;
};

export default Index;
