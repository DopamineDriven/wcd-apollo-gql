import { QueryResolvers } from "./type-defs.graphqls";
import { ResolverContext } from "./apollo";
import users from "./userData";
import { User } from "./viewer.graphql";

interface UserArgs {
	id: string;
}

const Query: Required<QueryResolvers<ResolverContext>> = {
	viewers(_parent, { args }: UserArgs | any, _context, _info): User[] {
		users.find((user) => {
			user.id === args;
		});
		console.log(users);
		return users;
	}
};

export default { Query };
