import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { UserInfo } from '../login';

//스키마 타입 정의 
const typeDefs = gql`
	type User {
		id: ID
		nickname: String
  }
	type Query {
		getUser: User
  }

  type Mutation {
    user(id:String, password:String): User
  }
`;
//GraphQL 스키마를 통해 제공할 데이터를 정의하는 함수를 담은 객체를 할당
const resolvers = {
    Query: {
      getUser: () => ({ id: "1", nickname: "World"}),
    },
    Mutation: {
      user: ():UserInfo => ({ id: "hyo0", nickname:"하하호호"})
    }
  };

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
