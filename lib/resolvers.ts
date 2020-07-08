import { QueryResolvers } from "./type-defs.graphqls";
import { ResolverContext } from "./apollo";
import { users } from "./userData"
import { User } from "./viewer.graphql"
// useQuery
const Query: Required<QueryResolvers<ResolverContext>> = {
	viewer(_parent, _args, _context, _info): User[] {
		return users;
	}
};

export default { Query };
