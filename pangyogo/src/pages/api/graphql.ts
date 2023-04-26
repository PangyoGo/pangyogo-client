import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

//스키마 타입 정의 
const typeDefs = gql`
	type User {
		id: ID
		firstName: String
		lastName: String
  }
	type Query {
		getUser: User
  }
`;
//GraphQL 스키마를 통해 제공할 데이터를 정의하는 함수를 담은 객체를 할당
const resolvers = {
    Query: {
      getUser: () => ({ id: "1", firstName: "Hello", lastName: "World" }),
    },
  };

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
