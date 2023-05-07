import { gql } from "graphql-request";

export const typeDefs = gql`
	type User {
		id: ID
		nickname: String
  }
  
	type Query {
		getUser: User
  }

  type Mutation {
    user(id:String, password:String): User
    join(form: CreateUserInput!): Boolean
    checkId(id: String): Boolean
  }

  input CreateUserInput {
    id: String!
    nickname: String!
    password: String!
  }
`;