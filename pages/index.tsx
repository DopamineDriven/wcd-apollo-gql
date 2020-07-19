import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { initializeApollo } from "../lib/apollo";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { Card, Col, Layout, Row, List } from "antd";
import { ErrorBanner } from "../utils";
import Email from "../components/EmailIcon";
import Github from "../components/GithubIcon";
import Linkedin from "../components/LinkedinIcon";
import Twitter from "../components/TwitterIcon";
import ContentDetails from "../components/ContentDetails";
import CoverImage from "../components/CoverImage";
import FixedFooter from "../components/Footer";
import MetaDescription from "../components/MetaDescription";
import OnError from "../components/OnError";
import OnLoad from "../components/OnLoad";
import OnSuccess from "../components/OnSuccess";
import SubNavButton from "../components/SubNav";
import UserAvatar from "../components/UserAvatar";
import UserDetails from "../components/UserDetails";

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
				<Head>
					<title>Landing Page</title>
				</Head>
				<OnSuccess />
				<div className="index-row-keeper">
					<SubNavButton />
					<Row
						gutter={[48, 48]}
						justify="center"
						className="index-row"
						align="middle"
					>
						<Col
							span={8}
							xs={24}
							sm={12}
							md={8}
							lg={6}
							xl={4}
							style={{ alignContent: "center" }}
						>
							<List
								grid={{
									gutter: 8,
									xs: 1,
									sm: 2,
									lg: 4
								}}
								header={<div></div>}
								dataSource={items}
								renderItem={item => (
									<Content className="user-card">
										<Item>{item}</Item>
									</Content>
								)}
							/>
						</Col>
						<FixedFooter />
					</Row>
				</div>
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

// https://ant.design/components/list/
