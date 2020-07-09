import { QueryResolvers } from "./type-defs.graphqls";
import { ResolverContext } from "./apollo";
import { User } from "./viewer.graphql";
import { users } from "./userData";
const Query: Required<QueryResolvers<ResolverContext>> = {
	viewers(_parent, _args, _context, _info): User[] {
		return users
	}
};

export default { Query };
