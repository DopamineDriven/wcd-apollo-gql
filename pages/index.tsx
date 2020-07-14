import React from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import {
	Avatar,
	Button,
	Card,
	// Col,
	Divider,
	Layout,
	// Row,
	Spin,
	Typography
} from "antd";
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
						src={`${viewer.coverphoto}`}
						alt={`nextjs and JAMstack`}
						className="user-avatar"
					/>
				}
				actions={[
					<Button
						href={viewer.github}
						target="__blank"
						className="user-social-media-button"
					>
						<GithubOutlined
							key="github"
							className="user-github-icon"
							color={iconColor}
						/>
					</Button>,
					<Button
						href={viewer.linkedin}
						target="__blank"
						className="user-social-media-button"
					>
						<LinkedinOutlined
							key="linkedin"
							className="user-linkedin-icon"
							color={iconColor}
						/>
					</Button>,
					<Button
						href={viewer.twitter}
						target="__blank"
						className="user-social-media-button"
					>
						<TwitterOutlined
							key="twitter"
							className="user-twitter-icon"
							color={iconColor}
						/>
					</Button>
				]}
			>
				<Title level={4} className="user-details">
					<Text className="user-name-user-role">
						{viewer.name}—{viewer.role}
					</Text>
				</Title>
				<Divider />
				<Meta
					description={
						<Button
							style={{ float: "right" }}
							size="large"
							type="link"
							className="user-button"
						>
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
					<Text className="user-content">
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
			<Content className="user-card">
				{/* <Row gutter={24} justify="space-between">
					<Col xs={24} lg={14} flex="auto"> */}
					<ul>{items}</ul>
					{/* </Col>
				</Row> */}
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
