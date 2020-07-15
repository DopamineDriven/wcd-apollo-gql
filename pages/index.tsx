import React from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import { Button } from "antd/lib/index";

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
	return (
			<div className="index-body" style={{ color: "black" }}>
				<div style={{ color: "black", height: "100vh", paddingTop: "100px", verticalAlign: "center" }}>
					<Button className="index-button" type="link" size="large" shape="round">
						<Link href="/about">
							<a className="index-anchor">About</a>
						</Link>{" "}
					</Button>
				</div>
			</div>

	);
};

export default Index;
