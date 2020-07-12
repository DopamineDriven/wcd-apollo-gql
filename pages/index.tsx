import React, { FC } from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import { Card, Col, Divider, Row } from "antd";


const { Meta } = Card;

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

		const items = viewers.map((viewer) => (
			<Card.Grid
				key={viewer.id}
				hoverable={true}
				style={{ width: "33.33%", textAlign: "justify" }}
			>
				{viewer.name}—{viewer.role}
				<br />
			</Card.Grid>
		));

		return error ? (
			<div>oops! error</div>
		) : loading ? (
			<div>loading...</div>
		) : (
			<div className="user-card">
				<ul>{items}</ul>
				go to the{" "}
				<Link href="/about">
					<a>about</a>
				</Link>{" "}
				page.
			</div>
		);
	}
	return <div></div>;
};

export default Index;
