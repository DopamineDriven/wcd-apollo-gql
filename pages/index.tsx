import { GetStaticProps } from "next";
import Link from "next/link";
import { useViewerQuery, ViewerDocument } from "../lib/viewer.graphql";
import { initializeApollo } from "../lib/apollo";

const Index = () => {
	const { data } = useViewerQuery();
	const { viewer } = data!;

	return (
		<div>
			Signed in as {viewer.name} and you're {viewer.status} go to the{" "}
			<Link href="/about">
				<a>about</a>
			</Link>{" "}
			page.
		</div>
	);
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
