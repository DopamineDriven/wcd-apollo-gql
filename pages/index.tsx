import React from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import { Avatar, Button, Card, Divider, Layout, Spin, Typography } from "antd";
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	UserOutlined
} from "@ant-design/icons";
import { ErrorBanner, iconColor } from "../utils";
import { PageSkeleton } from "../components";

const { Meta } = Card;
const { Content } = Layout;
const { Paragraph, Text, Title } = Typography;

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
				style={{ display: "inline-block", width: "30%" }}
				className="user-card-grid"
				cover={
					<img
						src={`https://res.cloudinary.com/asross311/image/upload/v1594586260/ASR_Assets/next-jamstack_ml7non.png`}
						alt={`nextjs and JAMstack`}
						className="user-avatar"
					/>
				}
				actions={[
					<Button href={viewer.github} target="__blank">
						<GithubOutlined key="github" color={iconColor} />
					</Button>,
					<Button href={viewer.linkedin} target="__blank">
						<LinkedinOutlined key="linkedin" color={iconColor} />
					</Button>,
					<Button target="__blank" href={viewer.twitter}>
						<TwitterOutlined key="twitter" color={iconColor} />
					</Button>
				]}
			>
				<Title level={4} className="user-details">
					<Text strong style={{ fontSize: "30px" }}>
						{viewer.name}—{viewer.role}
					</Text>
				</Title>
				<Divider />
				{/* <div className="user-avatar">
					<Avatar
						size={150}
						src={viewer.image}
						icon={UserOutlined}
						className="user-avatar"
						shape="square"
					/>
				</div> */}
				<Meta
					description={
						<Button style={{ float: "right" }} size="large">
							<Link href="/about">
								<a>About</a>
							</Link>
						</Button>
					}
					avatar={
						<Avatar
							src={viewer.image}
							size={200}
							icon={UserOutlined}
							className="user-avatar"
							shape="circle"
						/>
					}
				/>
				<Divider />
				<Paragraph>
					<Text strong style={{ fontSize: "larger" }}>
						<em>{viewer.content}</em>
					</Text>
				</Paragraph>
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
			<Content className="user-card" style={{ display: "inline" }}>
				<ul>{items}</ul>
				<Divider />
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
