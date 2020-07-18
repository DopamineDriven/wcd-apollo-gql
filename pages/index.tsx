import React from "react";
import { GetStaticProps } from "next";
import { initializeApollo } from "../lib/apollo";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { Card, Col, Divider, Layout, Row, List } from "antd";
import { ErrorBanner } from "../utils";

import {
	ContentDetails,
	CoverImage,
	Email,
	FixedFooter,
	Github,
	Linkedin,
	MetaDescription,
	OnError,
	OnLoad,
	OnSuccess,
	Twitter,
	UserAvatar,
	UserDetails
} from "../components";

const { Meta } = Card;
const { Content } = Layout;
const { Item } = List;

const Index = () => {
	const { data, loading, error } = useViewerQuery();

	if (data) {
		const { viewers } = data!;
		// console.log(viewers);

		const items = viewers.map(viewer => (
			<Card
				key={viewer.id}
				hoverable={true}
				className="index-card"
				style={{
					display: "inline-block",
					textAlign: "justify",
					margin: "20px"
				}}
				cover={<CoverImage src={viewer.coverphoto} alt={viewer.name} />}
				actions={[
					<Github github={viewer.github} />,
					<Linkedin linkedin={viewer.linkedin} />,
					<Twitter twitter={viewer.twitter} />,
					<Email email={viewer.email} />
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
				<OnSuccess />
				<div className="index-row-keeper">
					<Divider />
					<Row gutter={24} justify="space-between" className="index-row">
						<Col xs={24} lg={8} xl={6} style={{ alignContent: "center" }}>
							<List
								grid={{
									gutter: 8,
									xs: 1,
									sm: 2,
									lg: 4
								}}
								dataSource={items}
								renderItem={item => (
									<Content className="user-card">
										<Item>{item}</Item>
									</Content>
								)}
							/>
						</Col>
						<Divider />
						<FixedFooter />
					</Row>
				</div>
			</Layout>
		);
	}
	<div>
		<ErrorBanner />
	</div>;
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
