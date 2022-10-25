import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from "./graphql";   
// schema.ts for generating the schema with Nexus
export const schema = makeSchema({
  types, // 1
  outputs: {
	// The first output file that Nexus will generate for you is a GraphQL schema file 
	// of type .graphql. This is the GraphQL Schema Definition Language (SDL) for defining the structure of your API
    schema: join(process.cwd(), "schema.graphql"), 
	// typegen contains typescript type definitions for all types in GraphQL schema
	// These generated types will help ensure typesafety in your application code and keep your GraphQL schema definition in sync with your schema implementation
    typegen: join(process.cwd(), "nexus-typegen.ts"), // 3
  },
})