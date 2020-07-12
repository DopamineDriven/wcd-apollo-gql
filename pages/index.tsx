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
			<Card.Grid key={viewer.id} hoverable={true} className="user-card-grid">
				<Title level={4} className="user-details">{viewer.name}</Title>
				{viewer.name}—{viewer.role}
				<div className="user-avatar">
					<Avatar
						size={150}
						src={viewer.image}
						icon={UserOutlined}
						className="user-avatar"
						shape="square"
					/>
				</div>
				<Divider />
			</Card.Grid>
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
