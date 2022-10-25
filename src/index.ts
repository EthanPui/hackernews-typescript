// index.ts for creating a GraphQL web server with Apollo
import { ApolloServer } from "apollo-server";
import { context } from "./context";   
import { schema } from "./schema";

export const server = new ApolloServer({
    schema,
	context,
});

const port = 3000;
// 2
server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});