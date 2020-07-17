import React from "react";
import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { initializeApollo } from "../lib/apollo";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import {
	Avatar,
	Button,
	Card,
	// Col,
	Divider,
	Layout,
	// Row,
	Spin,
	Typography,
	Affix
} from "antd";
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	UserOutlined
} from "@ant-design/icons";
import { ErrorBanner, iconColor } from "../utils";
import { PageSkeleton, FixedHeader } from "../components";

const { Meta } = Card;
const { Content } = Layout;
const { Paragraph, Text, Title } = Typography;

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
					width: "33.33%",
					textAlign: "justify",
					margin: "20px"
				}}
				cover={
					<img
						src={`${viewer.coverphoto}`}
						alt={`nextjs and JAMstack`}
						style={{ textAlign: "center", verticalAlign: "middle" }}
					/>
				}
				actions={[
					<Button
						href={viewer.github}
						target="__blank"
						style={{
							border: "1px #000000 groove",
							color: "#000000",
							fontWeight: "bold"
						}}
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
						style={{
							border: "1px #000000 groove",
							color: "#000000",
							fontWeight: "bold"
						}}
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
						style={{
							border: "1px #000000 groove",
							color: "#000000",
							fontWeight: "bold"
						}}
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
				<Meta />
				<Affix offsetTop={0} className="affix-header">
					<FixedHeader />
				</Affix>
				<Head>
					<title>SSR, Apollo, GraphQL, and Next.js</title>
				</Head>
				<body>
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
						{/* <Row gutter={24} justify="space-between">
					<Col xs={24} lg={14} flex="auto"> */}
						<ul>{items}</ul>
						{/* </Col>
				</Row> */}
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

{
	/* <Head>
<title>Windy City Devs</title>
<meta property="og:title" content="Windy City Devs" key="title" />
</Head>
<Head>
<meta property="og:title" content="Windy City Devs" key="title" />
</Head>
<Layout className="app-layout">
<Affix offsetTop={0} className="affix-header">
	<FixedHeader />
</Affix>
<main className="main">
	<Center>
		<Component {...pageProps} />
	</Center>
</main>
<Footer />
</Layout> */
}
