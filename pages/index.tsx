import React, { FC } from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import { User } from "../lib/viewer.graphql";
import { Card } from "antd";


interface Props {
	user: User;
}

interface IndexProps {
	users: User[];
}

const { Meta } = Card;

const gridStyle = {
	width: "33.33%",
	textAlign: "justify"
};

// const PostCard: FC<Props> = ({ user }) => {
// 	return (
// 		<CardPostCard>
// 			<FigurePostCard>
// 				<img alt={user.name} src={user.image} />
// 			</FigurePostCard>
// 			<TitlePostCard>{user.name}</TitlePostCard>
// 			<LeadPostCard>{user.role}</LeadPostCard>
// 		</CardPostCard>
// 	);
// };

// const Section: FC<IndexProps> = ({ users }) => {
// 	return (
// 		<section>
// 			<GridSection>
// 				{users.map((user) => {
// 					<PostCard key={user.id} user={user} />;
// 				})}
// 			</GridSection>
// 			<Link href="/about">
// 				<a>about</a>
// 			</Link>{" "}
// 		</section>
// 	);
// };

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
			<Card.Grid key={viewer.id} hoverable={true} style={gridStyle}>
				{viewer.name}—{viewer.role}
				<br />
			</Card.Grid>
		));

		return error ? (
			<div>oops! error</div>
		) : loading ? (
			<div>loading...</div>
		) : (
			<div>
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
