import React, { FC } from "react";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";
import { User } from "../lib/viewer.graphql";
import styled from "styled-components";
// import apolloServer from './api/graphql';

export const CardPostCard = styled.a`
	border-radius: 6px;
	overflow: hidden;
	background-color: #fff;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 4px 25px rgba(0, 0, 0, 0.07);
	color: black;
	text-decoration: none;
	transition: all 0.2s;

	&:hover {
		color: black;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 6px 35px rgba(0, 0, 0, 0.2);
		transform: translateY(-2px);
	}
`;

export const FigurePostCard = styled.figure`
	padding: 56% 0 0;
	margin: 0;
	vertical-align: center;
	max-width: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 6px 6px 0 0;

	img {
		max-width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const TitlePostCard = styled.h3`
	margin: 10px 20px;
	font-size: 1.4rem;
`;

export const LeadPostCard = styled.div`
	margin: 0 20px 20px;

	& > * {
		margin: 0 0 10px;
	}
`;

export const GridSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	&:after {
		content: "";
		flex: auto;
	}

	&:after,
	& > * {
		width: calc(30% - 2px);
		margin-bottom: 20px;
	}

	@media (max-width: 800px) {
		&:after,
		& > * {
			width: 100%;
		}
	}
`;

export const TitleSection = styled.h2`
	font-size: 2.8rem;
	line-height: 1.1;
	margin: 10px 0 15px;

	@media (max-width: 800px) {
		font-size: 2rem;
	}
`;

export const LinkSection = styled.a`
	margin: -20px 0 30px;
	display: inline-block;
	vertical-align: top;
`;

interface Props {
	user: User;
}

interface IndexProps {
	users: User[];
}

const PostCard: FC<Props> = ({ user }) => {
	return (
		<CardPostCard>
			<FigurePostCard>
				<img alt={user.name} src={user.image} />
			</FigurePostCard>
			<TitlePostCard>{user.name}</TitlePostCard>
			<LeadPostCard>{user.role}</LeadPostCard>
		</CardPostCard>
	);
};

const Section: FC<IndexProps> = ({ users }) => {
	return (
		<section>
			<GridSection>
				{users.map((user) => {
					<PostCard key={user.id} user={user} />;
				})}
			</GridSection>
			<Link href="/about">
				<a>about</a>
			</Link>{" "}
		</section>
	);
};

const Index: NextPage = () => {
	const { data, loading, error } = useViewerQuery();
	if (data) {
		const { viewers } = data!;

		return error ? (
			<div>oops! error</div>
		) : loading ? (
			<div>loading...</div>
		) : (
			<div>

				<Section users={viewers} />
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

export default Index;
