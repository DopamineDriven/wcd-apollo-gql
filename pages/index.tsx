import React from "react";
import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import { initializeApollo } from "../lib/apollo";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { Card, Col, Divider, Layout, Row, Affix } from "antd";
import { ErrorBanner } from "../utils";
import {
	ContentDetails,
	CoverImage,
	FixedHeader,
	FixedFooter,
	Github,
	Linkedin,
	MetaDescription,
	OnError,
	OnLoad,
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
			<OnError />
		) : loading ? (
			<OnLoad />
		) : (
			<Layout className="app-layout">
				<Affix offsetTop={0} className="affix-header">
					<FixedHeader />
				</Affix>
				<Head>
					<title>SSR, Apollo, GraphQL, and Next.js</title>
				</Head>
				<>
					<Row gutter={24} justify="space-between" className="index-row">
						<Col xs={24} lg={8}>
							<Content className="user-card">
								<Divider />
								{items}
							</Content>
						</Col>
					</Row>
				</>
				<FixedFooter />
			</Layout>
		);
	}
	return (
		<div>
			<ErrorBanner />
		</div>
	);
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
