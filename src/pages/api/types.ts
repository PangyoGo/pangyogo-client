import { gql } from "graphql-request";

export const typeDefs = gql`
	type User {
		id: ID!
		nickname: String!
    accessToken: String!
    refeshToekn: String!
  }
  
	type Query {
		getUser: User
  }

  type Mutation {
    login(id:String, password:String): User
    join(form: CreateUserInput!): Boolean
    checkId(id: String): Boolean
  }

  input CreateUserInput {
    id: String!
    nickname: String!
    password: String!
  }
`;