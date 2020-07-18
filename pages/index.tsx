import React from "react";
import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { initializeApollo } from "../lib/apollo";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { Button, Card, Col, Divider, Layout, Row, Spin, Affix } from "antd";
import { ErrorBanner } from "../utils";
import {
	ContentDetails,
	CoverImage,
	FixedHeader,
	Github,
	Linkedin,
	MetaDescription,
	PageSkeleton,
	Twitter,
	UserAvatar,
	UserDetails
} from "../components";

const { Meta } = Card;
const { Content } = Layout;

const Index: NextPage = () => {
	const { data, loading, error } = useViewerQuery();
	if (data) {
		const { viewers } = data!;
		// console.log(viewers);

		const items = viewers.map(viewer => (
			<Card
				key={viewer.id}
				hoverable={true}
				style={{
					display: "inline-block",
					textAlign: "justify",
					margin: "20px"
				}}
				cover={<CoverImage src={viewer.coverphoto} alt={viewer.name} />}
				actions={[
					<Github github={viewer.github} />,
					<Linkedin linkedin={viewer.linkedin} />,
					<Twitter twitter={viewer.twitter} />
				]}
			>
				<UserDetails name={viewer.name} role={viewer.role} />
				<Meta
					description={<MetaDescription />}
					avatar={<UserAvatar src={viewer.image} alt={viewer.name} />}
				/>
				<ContentDetails content={viewer.content} />
			</Card>
		));

		return error ? (
			<Layout className="app-layout">
				<Content className="user">
					<ErrorBanner description="error occurred; please try again" />
					<PageSkeleton />
				</Content>
			</Layout>
		) : loading ? (
			<Layout className="app-layout">
				<Content className="user">
					<div className="spin-section">
						<Spin size="large" tip="Launching App" />
						<PageSkeleton />
					</div>
				</Content>
			</Layout>
		) : (
			<Layout className="app-layout">
				<Affix offsetTop={0} className="affix-header">
					<FixedHeader />
				</Affix>
				<Head>
					<title>SSR, Apollo, GraphQL, and Next.js</title>
				</Head>
				<body className="app-layout">
					<Content className="user-card">
						<div className="about-to-home-button">
							<Button
								className="index-button"
								type="link"
								size="large"
								shape="round"
							>
								<Link href="/">
									<a className="index-anchor">Technology</a>
								</Link>{" "}
							</Button>
						</div>
						<Divider />
						<Row gutter={24} justify="space-between">
							<Col xs={24} lg={24} flex="auto">
								{items}
							</Col>
						</Row>
					</Content>
				</body>
			</Layout>
		);
	}
	return <div></div>;
};

export default Index;

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
