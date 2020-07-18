import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../lib/schema";

const apolloServer = new ApolloServer({ schema });

export const config = {
	api: {
		bodyParser: true
	}
};

export default apolloServer.createHandler({ path: "/api/graphql" });
