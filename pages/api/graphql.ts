import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../lib/schema";

const apolloServer = new ApolloServer({ schema });

export const config = {
	api: {
		bodyParser: true
	}
};

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export default handler;
